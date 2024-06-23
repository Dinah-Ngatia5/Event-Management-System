from flask import Blueprint, request, jsonify
from app import db
from app.models import Event
from flask_jwt_extended import jwt_required

events_bp = Blueprint('events', __name__, url_prefix='/events')

@events_bp.route('/', methods=['GET'])
def get_events():
    events = Event.query.all()
    events_list = [{
        'id': event.id,
        'name': event.name,
        'description': event.description,
        'date': event.date.isoformat(),
        'time': event.time.strftime('%H:%M'),
        'city': event.city,
        'country': event.country,
        'image': event.image
    } for event in events]
    return jsonify(events_list), 200

@events_bp.route('/', methods=['POST'])
@jwt_required()
def add_event():
    data = request.get_json()
    event = Event(
        name=data.get('name'),
        description=data.get('description'),
        date=data.get('date'),
        time=data.get('time'),
        city=data.get('city'),
        country=data.get('country'),
        image=data.get('image')
    )
    db.session.add(event)
    db.session.commit()
    return jsonify({'message': 'Event added successfully'}), 201
