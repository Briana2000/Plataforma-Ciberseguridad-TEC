from flask import Blueprint, Response, jsonify, request


exercices = Blueprint('challenges', __name__)

# download a zip file
@exercices.route('/download/<string:filename>', methods=['GET'])
def download(filename: str) -> Response:
	return jsonify({'message': 'download'})

# upload a zip file
@exercices.route('/upload', methods=['POST'])
def upload() -> Response:
	return jsonify({'message': 'upload'})