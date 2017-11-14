const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const routes = require('./routes')

require('dotenv').load()
const { PORT, DB_URI } = process.env

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

mongoose
  .connect(DB_URI, { useMongoClient: true })
  .then(db => console.log(`Connected to DB ${db.name} on HOST ${db.host}...`))

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))
