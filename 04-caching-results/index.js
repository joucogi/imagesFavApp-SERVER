const express = require('express')
require('dotenv').load()

const { PORT } = process.env

const app = express()
const routes = require('./routes')

app.use(routes)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`)
