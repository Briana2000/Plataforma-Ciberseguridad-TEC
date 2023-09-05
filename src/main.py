#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#region imports
from flask import Flask, Response, jsonify, request, Blueprint
from dotenv import load_dotenv
from os import getenv
from blueprints.exercices import exercices
from modules.hashtable import HashTable
#endregion

#region app initialization
load_dotenv()
app: Flask = Flask(__name__)
hash_table: HashTable = HashTable()
#endregion



#region subscribe blueprints
app.register_blueprint(exercices, url_prefix='/exercices')
#endregion


#region routes
@app.route('/', methods=['GET'])
def index() -> Response:
	return jsonify({'message': 'Hello world!'})

#endregion



if __name__ == '__main__':
	app.run(debug=getenv('DEBUG'), port=getenv('PORT'))