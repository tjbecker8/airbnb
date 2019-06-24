//require package

const {Client} = require('pg')

// create connection to database

const db = new Client ({
	connectionString: process.env.DATABASE_URL
})

db.connect((err)=>{
	if (err) {
		console.log('error connectiong to postgresSQL database');
	} else {
		console.log('connected to postgresSQL database');
	}
})

module.exports = db
