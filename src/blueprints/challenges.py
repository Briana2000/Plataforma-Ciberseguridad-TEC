from flask import Blueprint, Response, jsonify, request


challenges = Blueprint('challenges', __name__)

# download a zip file
@challenges.route('/download/<string:filename>', methods=['GET'])
def download(filename: str) -> Response:
	return jsonify({'message': 'download'})

# upload a zip file
@challenges.route('/upload', methods=['POST'])
def upload() -> Response:
	return jsonify({'message': 'upload'})