export function getExercises() {
  return fetch('/exercises').then(res => res.json())
}

export function patchExercise(exercise) {
  return fetch('/exercises/' + exercise._id, {
    method: 'PATCH',
    body: JSON.stringify(exercise),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function postPersonalWorkout(workout) {
  return fetch('/workouts', {
    method: 'POST',
    body: JSON.stringify(workout),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function getWorkouts() {
  return fetch('/workouts').then(res => res.json())
}

export function deleteWorkout(id) {
  return fetch('/workouts/' + id, {
    method: 'DELETE',
  }).then(res => res.json())
}
