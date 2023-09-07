from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from os import getenv

db = SQLAlchemy()

# Create a model for the database
class Users(db.Model):
    student_carnet = db.Column(db.Integer, primary_key=True)
    student_nickname = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.student_nickname

def add_learner(student_carnet, student_nickname):
    new_learner = Users(student_carnet=student_carnet, student_nickname=student_nickname)
    db.session.add(new_learner)
    db.session.commit()

def get_learnes():
    learners = Users.query.all()
    learners_list = [{"student_carnet": learner.student_carnet, "student_nickname": learner.student_nickname} for learner in learners]
    return jsonify(learners_list)

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
    