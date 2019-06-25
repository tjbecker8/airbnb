const db = require('../db.js')


module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name, properties.price, properties.rating, properties.rooms,  countries.name AS "country"
FROM properties
LEFT JOIN countries
	ON properties.country = countries.id ` // default query = all products
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
