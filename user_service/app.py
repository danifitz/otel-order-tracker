from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

@app.route('/login', methods=['POST'])
def login():
    return jsonify({"message": "User logged in successfully"})

@app.route('/profile', methods=['GET', 'PUT'])
def profile():
    if request.method == 'GET':
        return jsonify({"name": "John Doe", "email": "john.doe@example.com"})
    elif request.method == 'PUT':
        return jsonify({"message": "User profile updated"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005)

