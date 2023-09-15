#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#region imports
from flask import Flask, Response, jsonify, request
from dotenv import load_dotenv
from os import getenv
from flask_cors import CORS
from blueprints.challenges import challenges
from modules.hashtable import HashTable
#endregion

load_dotenv()

#region app initialization
app: Flask = Flask(__name__)
app.debug = None if getenv('DEBUG') == 'False' else True
app.config['PORT'] = getenv('PORT')

# Esto es para habilitar el Cross-Origin Resource Sharing para poder realizar peticiones desde otro puerto.
CORS(app)

hash_table: HashTable = HashTable()
#endregion



#region init and populate hash table
#hash_table.populate_hashtable(getenv('EXERCISES_DIR'))
#endregion




#region subscribe blueprints
app.register_blueprint(challenges, url_prefix='/challenges')
#endregion


#region routes
@app.route('/', methods=['GET'])
def index() -> Response:
	return jsonify({'message': 'Hello world!'})

#endregion

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=app.config['PORT'])
	#print(hash_table)