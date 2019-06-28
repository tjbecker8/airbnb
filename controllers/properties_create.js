const db = require('../db')

module.exports = (req, res) => {
	// Run SQL query using properties of the req.body object
	console.log(req.body);
	let query = `
		INSERT INTO properties (name, price, image, rating, country, type, city, rooms)
		VALUES ('${req.body.name}', ${req.body.price}, '${req.body.image}', ${req.body.rating}, ${req.body.country}, ${req.body.type}, ${req.body.city}, ${req.body.rooms})`
	console.log(query);
	db.query(query, (err, result) => {
		if (err) {
			console.log('err', err)
			res.send(err)
		} else {
			res.send('Property Created')
		}
	})
}
