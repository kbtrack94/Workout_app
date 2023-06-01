from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/workout', methods=['POST'])
def generate_workout():
    # Perform your workout generation logic here
    # You can access the selected date from the request object using `request.form['date']`
    # Generate the workout plan for the selected date and return it as a variable

    # Example workout plan
    workout_plan = {
        'Monday': 'Chest and Triceps',
        'Tuesday': 'Back and Biceps',
        'Wednesday': 'Legs and Shoulders',
        'Thursday': 'Cardio',
        'Friday': 'Rest',
        'Saturday': 'Full Body',
        'Sunday': 'Rest'
    }

    return render_template('workout.html', workout=workout_plan)

@app.route('/log', methods=['POST'])
def log_workout():
    # Access the logged workout information from the request object using `request.form`
    # Store the logged information in a database or file for further processing
    # Example: Log the running time for a specific date
    date = request.form['date']
    running_time = request.form['running_time']

    # Perform the necessary operations to store the log

    return 'Workout logged successfully'

if __name__ == '__main__':
    app.run(debug=True)
