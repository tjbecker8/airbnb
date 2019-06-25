const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT * FROM properties ` // default query = all products
	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}
	if (req.query.name) {
		query += `name = '${req.query.name}' `
	}
	if (req.query.price) {
		query += `price = '${req.query.price}' `
	}
	if (req.query.rating) {
		query += `rating = '${req.query.rating}' `
	}
	if (req.query.rooms) {
		query += `rooms = '${req.query.room}' `
	}
	
	console.log(query);
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
