// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Fetch and display workouts
  fetch('api/workouts')
    .then(response => response.json())
    .then(data => {
      const workoutList = document.getElementById('workoutList');
      data.forEach(workout => {
        const workoutItem = document.createElement('div');
        workoutItem.classList.add('workout-item');
        workoutItem.innerHTML = `
          <h2>${workout.title}</h2>
          <p>${workout.description}</p>
          <p>Duration: ${workout.duration} minutes</p>
          <p>Difficulty: ${workout.difficulty}</p>
        `;
        workoutList.appendChild(workoutItem);
      });
    });

  // Track progress
  const trackForm = document.getElementById('trackForm');
  trackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    
    // Make a POST request to track progress
    fetch('api/progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ exercise, sets, reps })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response
    });
  });

  // Fetch and display progress history
  fetch('api/progress')
    .then(response => response.json())
    .then(data => {
      const progressList = document.getElementById('progressList');
      data.forEach(progress => {
        const progressItem = document.createElement('div');
        progressItem.classList.add('progress-item');
        progressItem.innerHTML = `
          <h3>${progress.exercise}</h3>
          <p>Sets: ${progress.sets}</p>
          <p>Reps: ${progress.reps}</p>
        `;
        progressList.appendChild(progressItem);
      });
    });
});
