from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

@app.route('/notify', methods=['POST'])
def send_notification():
    return jsonify({"message": "Notification sent"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5003)

