const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name, properties.price, properties.rating, properties.rooms, properties.image, cities.name AS "city", proptype.type AS "type"
FROM properties
LEFT JOIN cities
	ON properties.city = cities.id
LEFT JOIN proptype
	 	ON properties.type = proptype.id ` // default query = all products
	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}
	if (req.query.min && req.query.max) {
		query += `price BETWEEN ${req.query.min} AND ${req.query.max}`
	}
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
	
}
