#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#region imports
from flask import Flask, Response, jsonify, request
from dotenv import load_dotenv
from os import getenv
from blueprints.challenges import challenges
from blueprints.users import learners
from modules.hashtable import HashTable
from flask_sqlalchemy import SQLAlchemy
from modules.modelDB import db
#endregion

load_dotenv()

#region app initialization
app: Flask = Flask(__name__)
app.debug = None if getenv('DEBUG') == 'False' else True
app.config['PORT'] = getenv('PORT')
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://" + getenv("ADMIN_USER") + ":" + getenv("ADMIN_PASSWORD") + "@localhost:" + getenv("DB_PORT") + "/" + getenv("DB_NAME")
db.init_app(app)

hash_table: HashTable = HashTable()
#endregion



#region init and populate hash table
hash_table.populate_hashtable(getenv('EXERCISES_DIR'))
#endregion




#region subscribe blueprints
app.register_blueprint(challenges, url_prefix='/challenges')
app.register_blueprint(learners, url_prefix='/learners')
#endregion


#region routes
@app.route('/', methods=['GET'])
def index() -> Response:
	return jsonify({'message': 'Hello world!'})

#endregion

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=app.config['PORT'])
	#print(hash_table)