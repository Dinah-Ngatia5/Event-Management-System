import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'e4f88261b0e0774f78b9aa82e12f11ae49253350d349dcda5c799094be19d51a')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'postgresql://Josephine:1234@localhost:5432/getevents_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', '2106d7b0d99819f74bded38c3de2dd7ec1b20d8c3e4b0ef8b7a4f7df917a6ab3')
