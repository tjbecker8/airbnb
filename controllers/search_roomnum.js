const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name, properties.price, properties.rating, properties.image, cities.name AS "city", proptype.type AS "type", roomnumb.rooms as "rooms"
								FROM properties
								LEFT JOIN cities
								ON properties.city = cities.id
								LEFT JOIN proptype
 								ON properties.type = proptype.id
								LEFT JOIN roomnumb
								ON properties.rooms = roomnumb.id ` 
	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}
	if (req.query.name) {
		query += `roomnumb.id = ${req.query.name} `
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
