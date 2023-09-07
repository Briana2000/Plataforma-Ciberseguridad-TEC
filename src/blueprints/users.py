from flask import Blueprint, Response, jsonify, request
from modules.modelDB import Users
from modules.modelDB import db


learners = Blueprint('learners', __name__)

# add new learner
@learners.route('/add', methods=['POST'])
def add_learner() -> Response:
    #Check if json is empty
    if not request.is_json:
        return jsonify({'message': 'JSON is empty'}), 400
    
    #Check if json has the required fields
    if not request.json.get('carnet') or not request.json.get('nickname'):
        return jsonify({'message': 'JSON is missing fields'}), 400
    
    data = request.get_json()

    print(type(data.get('carnet')))
    print(data.get('nickname'))

    #create new learner
    new_learner = Users(student_carnet=data['carnet'], student_nickname=data['nickname'])

    #add new learner to database
    try:
        db.session.add(new_learner)
        db.session.commit()
        return jsonify({'message': 'Learner added successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Error adding user: {str(e)}"}), 500


# get learners list
@learners.route('/get_all', methods=['GET'])
def get_learners():
    try:
        learners = Users.query.all()
        learners_list = [{"student_carnet": learner.student_carnet, "student_nickname": learner.student_nickname} for learner in learners]
        return jsonify(learners_list)
    except Exception as e:
        return jsonify({'message': 'Error getting learners list'}), 500
