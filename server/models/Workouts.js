const mongoose = require('mongoose')

const workoutsSchema = {
  workoutName: String,
  category: String,
  image: String,
  title: String,
  exercises: [String],
}

module.exports = mongoose.model('Workouts', workoutsSchema)
