axios.get(`api/cities`).then((res) =>{
	let city = res.data
	// console.log(city);
	let random = _.sample(city, 'city')
	console.log(random);
})
