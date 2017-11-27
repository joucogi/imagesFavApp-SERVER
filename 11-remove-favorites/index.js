const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('dotenv').load()
const { PORT, DB_URI } = process.env

const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(routes)

mongoose
  .connect(DB_URI, { useMongoClient: true })
  .then(db => console.log(`Connected to DB ${db.name} on HOST ${db.host}...`))

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))
