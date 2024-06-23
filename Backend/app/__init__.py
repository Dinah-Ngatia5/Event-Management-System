from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from config import Config
import os

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions with the app instance
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)
    CORS(app)  # Enable CORS for all routes

    # Register Blueprints
    from app.routes import main_bp
    from app.auth import auth_bp
    from app.events import events_bp

    app.register_blueprint(main_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(events_bp)

    # Serve static files (events.json in this case)
    @app.route('/events.json')
    def get_events():
        try:
            return send_from_directory(os.path.join(app.root_path, 'events.json'), 'events.json')
        except FileNotFoundError:
            return "File not found", 404

    return app
