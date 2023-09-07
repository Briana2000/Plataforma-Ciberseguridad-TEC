from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from os import getenv


load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://" + getenv("ADMIN_USER") + ":" + getenv("ADMIN_PASSWORD") + "@localhost:" + getenv("DB_PORT") + "/" + getenv("DB_NAME")
db = SQLAlchemy(app)


# Create a model for the database
class Users(db.Model):
    student_carnet = db.Column(db.Integer, primary_key=True)
    student_nickname = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.student_nickname

class ExerciseTypes(db.Model):
    exercise_type_id = db.Column(db.Integer, primary_key=True)
    type_name = db.Column(db.String(256), nullable=False)

    def __repr__(self):
        return '<ExerciseType %r>' % self.type_name
    
class Exercises(db.Model):
    exercise_id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(50), nullable=False)
    details = db.Column(db.String(256))
    difficulty = db.Column(db.String(16))
    hash = db.Column(db.String(128), nullable=False)
    exercise_type = db.Column(db.Integer, db.ForeignKey('exercise_types.exercise_type_id'))

    def __repr__(self):
        return '<Exercise %r>' % self.exercise_name
    
class CompletedExercises(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('users.student_carnet'), primary_key=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.exercise_id'), primary_key=True)
    
    def __repr__(self):
        return '<CompletedExercise %r>' % self.user_id + " " + self.exercise_id
    