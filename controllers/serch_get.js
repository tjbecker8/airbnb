const db = require('../db.js')


module.exports = (req, res) => {
	console.log('req query', req.query);
	if (req.query.name) {
		query += `WHERE name = ${req.query.name}`
	}
	db.query(query,(err, result) => {
		if (err) {
			res.send(err)
		}
		else {
			res.send(result.rows)
		}
	})
}
