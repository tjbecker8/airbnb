console.log('script.js is connected');

window.onload = () => {

	axios.get('/api/properties').then((res) => {
		let properties = res.data
		let properties_ul = document.getElementById('toprated')
		properties.forEach((p) => {
			properties_ul.insertAdjacentHTML('beforeEnd', `
			<div id="property">
				<div class="type">
					<h2>type - location</h2>
				</div>
				<div class="name">
					<h2>name</h2>
				</div>
				<div class="price">
					<p>price/night</p>
				</div>
				<div class="rating">
					<small>rating</small>
				</div>
			</div>
			`)
		})
	}).catch((err) => {
		console.log('err', err)
	})



	axios.get('/api/cities').then((res) => {
		let city = res.data
		let city_ul = document.getElementById('city')
		city.forEach((c)=> {
			city_ul.insertAdjacentHTML('beforeEnd', `
			<li><a href="#">${c.name}</a></li>
			`)
		})
	})

	axios.get('/api/countries').then((res) => {
		let country = res.data
		let country_ul = document.getElementById('country')
		country.forEach((c)=> {
			country_ul.insertAdjacentHTML('beforeEnd', `
			<li><a href="#">${c.name}</a></li>
			`)
		})
	})

}
