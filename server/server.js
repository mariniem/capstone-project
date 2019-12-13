const express = require('express')
const Exercise = require('./models/Exercise')
const Workouts = require('./models/Workouts')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`))

app.get('/exercises', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.json(err))
})

app.get('/exercises/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then(exercises => res.json(exercises))
    .catch(err => res.json(err))
})

app.patch('/exercises/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err))
})

app.get('/workouts', (req, res) => {
  Workouts.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err))
})
app.post('/workouts', (req, res) => {
  Workouts.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => res.json(err))
})

app.delete('/workouts/:id', (req, res) => {
  Workouts.findByIdAndDelete(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => res.json(err))
})
