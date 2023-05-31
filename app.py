# app.py

from flask import Flask, jsonify, request

app = Flask(__name__)

workouts = [
    {
        'title': 'Cardio Workout',
        'description': 'A high-intensity cardio routine',
        'duration': 30,
        'difficulty': 'Intermediate'
    },
    {
        'title': 'Strength Training',
        'description': 'Full-body strength training session',
        'duration': 45,
        'difficulty': 'Advanced'
    }
]

progress = []

@app.route('/api/workouts', methods=['GET'])
def get_workouts():
    return jsonify(workouts)

@app.route('/api/progress', methods=['GET'])
def get_progress():
    return jsonify(progress)

@app.route('/api/progress', methods=['POST'])
def track_progress():
    data = request.get_json()
    progress.append(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
