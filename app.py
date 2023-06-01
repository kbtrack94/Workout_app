import random

workout_library = {
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
}

# Define the days of the week
days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# Select a random Warm Up, Workout, and Cooldown for each day of the week
for day in days_of_week:
    print(f"Day: {day}")
    
    # Randomly select a Warm Up
    warm_up_key = random.choice(list(workout_library["Warm Up"].keys()))
    warm_up = workout_library["Warm Up"][warm_up_key]
    print("Warm Up:")
    print("Jog:", warm_up["Jog"])
    print("Drills:", warm_up["Drills"])
    print("Accelerations:", warm_up["Accelerations"])
    
    # Randomly select a Workout
    workout_key = random.choice(list(workout_library["Workout"].keys()))
    workout = workout_library["Workout"][workout_key]
    print("Workout:")
    print("Distance:", workout["Distance"])
    print("Pace:", workout["Pace"])
    print("Reps:", workout["Reps"])
    print("Rest:", workout["Rest"])
    
    # Randomly select a Cooldown
    cooldown_key = random.choice(list(workout_library["Cooldown"].keys()))
    cooldown = workout_library["Cooldown"][cooldown_key]
    print("Cooldown:")
    print("Exercises:", cooldown["Exercises"])
    
    print("----------------------------------")
