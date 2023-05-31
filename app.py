# app.py

from flask import Flask, jsonify, request

app = Flask(__name__)

workouts = [
    {
        'title': 'Cardio Workout',
        'description': 'A high-intensity cardio routine',
        'duration': 30,
        'difficulty': 'Intermediate',
        'type': 'cardio'
    },
    {
        'title': 'Strength Training',
        'description': 'Full-body strength training session',
        'duration': 45,
        'difficulty': 'Advanced',
        'type': 'strength'
    }
]

progress = []

@app.route('/api/workouts', methods=['GET'])
def get_workouts():
    workout_type = request.args.get('type')
    filtered_workouts = workouts
    if workout_type:
        filtered_workouts = [workout for workout in workouts if workout['type'] == workout_type]
    return jsonify(filtered_workouts)

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
