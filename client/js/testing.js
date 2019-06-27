axios.get(`api/properties`).then((res) =>{
	let city = res.data
	console.log(city);
})
