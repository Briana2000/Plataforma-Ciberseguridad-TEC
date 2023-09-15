from flask import Blueprint, Response, jsonify, request


challenges = Blueprint('challenges', __name__)


@challenges.route('/download/<int:id>', methods=['GET'])
def download(id: int) -> Response:
	return jsonify({'message': 'download'})

# Este todavía no, es parte del sprint 2
@challenges.route('/upload', methods=['POST'])
def upload() -> Response:
	return jsonify({'message': 'upload'})

@challenges.route('/info/<int:id>', methods=['GET'])
def info(id: int) -> Response:
	"""return jsonify({'ID': 0, 
				 'Name': 'Dummy Challenge',
				 'Description': 'Dummy Description',
				 'Category': 'Dummy Category'})"""
	
	return jsonify({
		            'Description': 'Do you have enough permissions to get the flag?',
					})

#Agregué datos de ejemplo
@challenges.route('/', methods=['GET'])
def list() -> Response:
	return jsonify([{
		'ID': 0,
        'Name': 'Pseudo',
        'Platform': 'HackTheBox',
        'Level': 'Medium',
        'Category': 'Reversing',
      },
	  {
        'ID': 1,
        'Name': 'RFlag',
        'Platform': 'HackTheBox',
        'Level': 'Easy',
        'Category': 'Hardware',
      }])

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