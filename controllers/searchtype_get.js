const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name, properties.price, properties.rating, properties.rooms, properties.country, properties.image, proptype.type AS "type", cities.name AS "city"
FROM properties
LEFT JOIN proptype
	ON properties.type = proptype.id
LEFT JOIN cities
	ON properties.type = cities.id ` // default query = all products
	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}
	if (req.query.name) {
		query += `proptype.id = ${req.query.name} `
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
