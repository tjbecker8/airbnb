axios.get(`api/cities`).then((res) =>{
	let city = res.data
	// console.log(city);
	let random = _.sample(city, 'city')
	console.log(random);
})

axios.get('/api/properties').then((res) => {
	let properties = res.data
	let properties_ul = document.getElementById('xyz')
	properties.forEach((p) => {
		let star = ''
		for (i = 1; i <= p.rating; i++) {
			star += `<i class="fas fa-star"></i>`
		}
		let html = `
		<div id="property">
			<div class="img" style="background-image: url(${p.image});">
				<img src="" alt="">
			</div>
			<div class="data">
				<div class="type">
					<p>${p.type} - ${p.city} </p>
				</div>
				<div class="name">
					<p>${p.name}</p>
				</div>
				<div class="price">
					<p>$${p.price}/night</p>
				</div>
				<div class="rating">
					<p id="stars">
						${star}
						${p.rating} stars
					</p>
				</div>
			</div>`
		properties_ul.insertAdjacentHTML('beforeEnd', html)
	})
}).catch((err) => {
	console.log('err', err)
})
