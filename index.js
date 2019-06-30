//require the npm packages

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const dp = require('./db')

//set up the .env file
require('dotenv').config()


app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/landing.html'))
})

app.get('/admin', (req,res) => {
	res.sendFile(path.join(__dirname, 'client/admin.html'))
})


app.get('/api/properties', require('./controllers/properties_get.js'))
app.get('/api/cities', require('./controllers/cities_get.js'))
app.get('/api/countries', require('./controllers/countries_get.js'))
app.get('/api/roomtype', require('./controllers/roomtype_get.js'))
app.get('/api/search', require('./controllers/properties_get.js'))
app.post('/api/search', require('./controllers/properties_create.js'))
app.get('/api/searchcity', require('./controllers/searchcities_get.js'))
app.get('/api/searchcountries', require('./controllers/searchcountries_get.js'))
app.get('/api/searchtype', require('./controllers/searchtype_get.js'))
app.get('/api/rooms', require('./controllers/roomnumb_get.js'))
app.get('/api/searchrooms', require('./controllers/search_roomnum.js'))
app.get('/api/pp', require('./controllers/price_search.js'))

//set up the server
app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
