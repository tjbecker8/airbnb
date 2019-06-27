const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name, properties.price, properties.rating, properties.rooms, properties.image, properties.type, properties.city, countries.name AS "country", cities.name As "city", proptype.type AS "type"
FROM properties
LEFT JOIN countries
	ON properties.country = countries.id
LEFT JOIN proptype
	ON properties.type = proptype.id
LEFT JOIN cities
	ON properties.city = cities.id ` // default query = all products
	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}
	if (req.query.name) {
		query += `countries.id = ${req.query.name} `
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
