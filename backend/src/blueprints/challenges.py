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
	return jsonify([
    {
        "ID": 0,
        "Name": "Hunting",
        "Platform": "HackTheBox",
        "Level": "Easy",
        "Category": "Pwn",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 1,
        "Name": "RFlag",
        "Platform": "HackTheBox",
        "Level": "Easy",
        "Category": "Hardware",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 2,
        "Name": "Unsighted",
        "Platform": "HackTheBox",
        "Level": "Hard",
        "Category": "Pwn",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 3,
        "Name": "Poly",
        "Platform": "HackTheBox",
        "Level": "Insane",
        "Category": "Reversing",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 4,
        "Name": "LostKey",
        "Platform": "HackTheBox",
        "Level": "Medium",
        "Category": "Crypto",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 5,
        "Name": "The Needle",
        "Platform": "HackTheBox",
        "Level": "Very Easy",
        "Category": "Hardware",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 6,
        "Name": "Broken Decryptor",
        "Platform": "HackTheBox",
        "Level": "Medium",
        "Category": "Crypto",
        "Description": "Do you have enough permissions to get the flag?"
    },
    {
        "ID": 7,
        "Name": "Pseudo",
        "Platform": "HackTheBox",
        "Level": "Medium",
        "Category": "Reversing",
        "Description": "Do you have enough permissions to get the flag?"
    }
])

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