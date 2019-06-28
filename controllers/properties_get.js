const db = require('../db.js')

module.exports = (req, res) => {
	db.query(`SELECT properties.id, properties.name, properties.price, properties.rating, properties.rooms, properties.country, properties.image, proptype.type AS "type", cities.name AS "city"
						FROM properties
						LEFT JOIN proptype
						ON properties.type = proptype.id
						LEFT JOIN cities
						ON properties.city = cities.id`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
