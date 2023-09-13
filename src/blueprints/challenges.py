from flask import Blueprint, Response, jsonify, request


challenges = Blueprint('challenges', __name__)


@challenges.route('/download/<int:id>', methods=['GET'])
def download(filename: str) -> Response:
	return jsonify({'message': 'download'})

@challenges.route('/upload', methods=['POST'])
def upload() -> Response:
	return jsonify({'message': 'upload'})

@challenges.route('/info/<int:id>', methods=['GET'])
def info(filename: str) -> Response:
	return jsonify({'ID': 0, 
				 'Name': 'Dummy Challenge',
				 'Description': 'Dummy Description',
				 'Category': 'Dummy Category'})

@challenges.route('/', methods=['GET'])
def list() -> Response:
	return jsonify({'message': 'list'})

@challenges.route('/submit', methods=['POST'])
def submit() -> Response:
	if request.is_json:
		flag: str | None = request.get_json()['flag'] if 'flag' in request.get_json() else None
		if flag:
			return jsonify({'message': 'submit'})
		else:
			return jsonify({'message': 'flag not found'})
	else:
		raise Exception('request is not json')