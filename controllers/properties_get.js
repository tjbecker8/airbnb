const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name, properties.price, properties.rating, properties.rooms, properties.image, cities.name AS "city", proptype.type AS "type"
								FROM properties
								LEFT JOIN cities
								ON properties.city = cities.id
								LEFT JOIN proptype
	 							ON properties.type = proptype.id ` 
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

	// console.log(query);
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
