console.log('admin.js is connected');

window.onload = () => {

	axios.get('/api/cities').then((res) => {
		let city = res.data
		let city_ul = document.getElementById('cities-ol')
		city.forEach((c)=> {
			city_ul.insertAdjacentHTML('beforeEnd', `
			<li>${c.id} - ${c.name}</li>
			`)
		})
	})


	axios.get('/api/countries').then((res) => {
		let country = res.data
		let country_ul = document.getElementById('count-ol')
		country.forEach((c)=> {
			country_ul.insertAdjacentHTML('beforeEnd', `
			<li>${c.id} - ${c.name}</li>
			`)
		})
	})

	axios.get('/api/roomtype').then((res) => {
		let type = res.data
		let type_ul = document.getElementById('type-ol')
		type.forEach((t)=> {
			type_ul.insertAdjacentHTML('beforeEnd', `
			<li>${t.id} - ${t.type}</li>
			`)
		})
	})

}
