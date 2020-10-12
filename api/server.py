import sys
from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
counter = 0
print(os.environ)

@app.route("/index", methods=['GET'])
def index():
    return jsonify({
        'title': "Welcome to Electron - Vue - Python stack !",
        'description': 'This content came from the api backend in python using the flask framework'
        })

@app.route('/increment')
def increment():
    global counter
    counter += 1
    return jsonify({'counter': counter})


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)