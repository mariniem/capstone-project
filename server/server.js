const express = require('express')
const Exercise = require('./models/Exercise')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/trayn', {
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
//Card.find().forEach(card => {delete card[id]});
/* const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on ${PORT}`))
app.get('/exercises', (req, res) => {
  Exercise.find().then(exercises => res.json(exercises))
}) */

/* mongoose.connect('mongodb://localhost:3000/Home', {
  useNewUrlParser: true,
})

const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`${PORT}`))

app.get('/exercises', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.json(err))
})

app.get('/exercises/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err))
})

app.post('/exercises', (req, res) => {
  Exercise.create(req.body)
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err))
})

app.patch('/exercises/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err))
})

app.delete('/exercises/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.json(err))
}) */
