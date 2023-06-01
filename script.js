// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Initial fetch and display all workouts
  fetch('api/workouts')
    .then(response => response.json())
    .then(data => {
      const workoutList = document.getElementById('workoutList');
      workoutList.innerHTML = "";
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

  // Filter workouts based on workout type
  function filterWorkouts() {
    const workoutType = document.getElementById('workoutType').value;
    fetch(`api/workouts?type=${workoutType}`)
      .then(response => response.json())
      .then(data => {
        const workoutList = document.getElementById('workoutList');
        workoutList.innerHTML = "";
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
  }

  // Track progress
  function submitProgress(event) {
    event.preventDefault();
    
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
  }

  // Fetch and display progress history
  fetch('api/progress')
    .then(response => response.json())
    .then(data => {
      const progressList = document.getElementById('progressList');
      progressList.innerHTML = "";
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

  // Randomly select a Warm Up, Workout, and Cooldown for each day of the week
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const workoutLibrary = {
    "Warm Up": {
      "A": {
        "Jog": ["Carioca", "Side Skips", "Lunges"],
        "Drills": "Sprint Drills A & B",
        "Accelerations": "3 x 20m"
      },
      "B": {
        "Jog": ["Carioca", "Side Skips", "Lunges"],
        "Drills": "Sprint Drills B & C",
        "Accelerations": "3 x 40m"
      },
      "C": {
        "Jog": ["Carioca", "Side Skips", "Lunges"],
        "Drills": "Sprint Drills A & C",
        "Accelerations": "2 x 40m"
      },
      "D": {
        "Jog": ["Carioca", "Side Skips", "Lunges"],
        "Drills": "Sprint Drills B & D",
        "Accelerations": "2 x 60m"
      },
      "E": {
        "Jog": "4x 100m",
        "Drills": "Hurdles Walkovers 5 x 10h",
        "Accelerations": "2 x 40m"
      }
    },
    "Workout": {
      "Workout A": {
        "Distance": "200m",
        "Pace": "M @ 30s / W @ 34s",
        "Reps": 6,
        "Rest": "3m"
      },
      "Workout B": {
        "Distance": "400",
        "Pace": "M @ 67s / W @ 75s",
        "Reps": 4,
        "Rest": "4m"
      },
      "Workout C": {
        "Distance": "150m",
        "Pace": "M @ 18s / W @ 20s",
        "Reps": 6,
        "Rest": "3m"
      },
      "Workout D": {
        "Distance": ["2 x 50m sled pulls", "2 x 30m blocks (3h)", "2 x 40m blocks (4h)"],
        "Pace": "M @ 18s / W @ 20s",
        "Reps": 6,
        "Rest": "3m"
      }
    },
    "Cooldown": {
      "Cooldown A": {
        "Exercises": ["Jog 4 x 100m", "Leg Swings x 15", "Exercise 3"]
      },
      "Cooldown B": {
        "Exercises": ["Walk 400m", "Leg Swings x 15"]
      },
      "Cooldown C": {
        "Exercises": ["100m technical build ups", "Side Lunges", "Quad Stretch"]
      },
      "Cooldown D": {
        "Exercises": ["Walk 400 (no shoes)", "Abs x 200"]
      },
      "Cooldown E": {
        "Exercises": ["Hurdle Walkovers 5 x 10h", "Leg Swings x 15"]
      }
    }
  };

  daysOfWeek.forEach(day => {
    console.log(`Day: ${day}`);

    // Randomly select a Warm Up
    const warmUpKey = getRandomKey(workoutLibrary["Warm Up"]);
    const warmUp = workoutLibrary["Warm Up"][warmUpKey];
    console.log("Warm Up:");
    console.log("Jog:", warmUp["Jog"]);
    console.log("Drills:", warmUp["Drills"]);
    console.log("Accelerations:", warmUp["Accelerations"]);

    // Randomly select a Workout
    const workoutKey = getRandomKey(workoutLibrary["Workout"]);
    const workout = workoutLibrary["Workout"][workoutKey];
    console.log("Workout:");
    console.log("Distance:", workout["Distance"]);
    console.log("Pace:", workout["Pace"]);
    console.log("Reps:", workout["Reps"]);
    console.log("Rest:", workout["Rest"]);

    // Randomly select a Cooldown
    const cooldownKey = getRandomKey(workoutLibrary["Cooldown"]);
    const cooldown = workoutLibrary["Cooldown"][cooldownKey];
    console.log("Cooldown:");
    console.log("Exercises:", cooldown["Exercises"]);

    console.log("----------------------------------");
  });

  // Helper function to get a random key from an object
  function getRandomKey(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  }
});
