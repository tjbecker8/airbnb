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

app.get('/api/properties', require('./controllers/properties_get.js'))
app.get('/api/cities', require('./controllers/city_get.js'))
app.get('/api/countries', require('./controllers/countries_get.js'))
app.get('/api/roomtype', require('./controllers/roomtype_get.js'))
app.get('/api/search', require('./controllers/serch_get.js'))
app.get('/api/searchcity', require('./controllers/searchcity_get.js'))


//set up the server
app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
