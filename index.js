//require the npm packages

const express = require('express')
const path = require('path')
const app = express()

const dp = require('./db')

//set up the .env file
require('dotenv').config()


app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/landing.html'))
})

//set up the server
app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
