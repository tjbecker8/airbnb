console.log('script.js is connected');

window.onload = () => {

	axios.get('/api/search?rating=5').then((res) => {
		let properties = res.data
		let properties_ul = document.getElementById('toprated')
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


	//places to stay in div
	axios.get(`api/cities`).then((res) =>{
		let city = res.data
		// console.log(city);
		let random = _.sample(city, 'city')
		// console.log(random);
		axios.get(`/api/searchcity?name=${random.id}`).then((res)=>{
			// console.log(res);
			let properties = res.data
			console.log(properties);
			let properties_ui = document.getElementById('xyz')
			properties_ui.insertAdjacentHTML('beforeEnd', `<h2>Places to stay in ${properties[0].city}</h2>`)
			let city_ui = document.getElementById('city-prop')
			console.log(city_ui);
			properties.forEach((p)=> {
				console.log('p', p);
				let star = ''
				for (i = 1; i<= p.rating; i++) {
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
				// console.log(html);
				city_ui.insertAdjacentHTML('beforeEnd', html)
			})
		}).catch((err) => {
			console.log('err', err)
		})
	})


	//all places to stay div
	axios.get('/api/properties').then((res) => {
		let properties = res.data
		let properties_ul = document.getElementById('properties-all')
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





	axios.get('/api/cities').then((res) => {
		let city = res.data
		let city_ul = document.getElementById('city')
		city.forEach((c)=> {
			city_ul.insertAdjacentHTML('beforeEnd', `
			<a href="#" class="city1" id="${c.id}">${c.name}</a>
			`)
		})
	})


	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('city1')) {
			axios.get(`/api/searchcity?name=${e.target.id}`).then((res) => {
				// console.log('res', res.data)
				let properties = res.data
				let properties_ui = document.getElementById('toprated')
				properties_ui.innerHTML = ''
				if (res.data.length) {
					properties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div id="property">
						<div class="img" style="background-image: url(${p.image});>
							<img src="" alt="">
						</div>
							<div class="type">
								<p>${p.city}<p>
							</div>
							<div class="name">
								<p>${p.name}</p>
							</div>
							<div class="price">
								<p>${p.price}t</p>
							</div>
							<div class="rating">
								<p>${p.rating}</p>
							</div>
						</div>
						`)
					})
				} else {
					products_ui.innerHTML = 'No products found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
	})




	axios.get('/api/countries').then((res) => {
		let country = res.data
		let country_ul = document.getElementById('country')
		country.forEach((c)=> {
			country_ul.insertAdjacentHTML('beforeEnd', `
			<a href="#" class="cont" id="${c.id}">${c.name}</a>
			`)
		})
	})


	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('cont')) {
			axios.get(`/api/searchcountries?name=${e.target.id}`).then((res) => {
				// console.log('res', res.data)
				let prooperties = res.data
				let properties_ui = document.getElementById('toprated')
				properties_ui.innerHTML = ''
				if (res.data.length) {
					prooperties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div id="property">
						<div class="img" style="background-image: url(${p.image});>
							<img src="" alt="">
						</div>
							<div class="type">
								<p>${p.city}<p>
							</div>
							<div class="name">
								<p>${p.name}</p>
							</div>
							<div class="price">
								<p>${p.price}t</p>
							</div>
							<div class="rating">
								<p>${p.rating}</p>
							</div>
						</div>
						`)
					})
				} else {
					products_ui.innerHTML = 'No products found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
	})

	axios.get('/api/roomtype').then((res) => {
		let type = res.data
		let type_ul = document.getElementById('type')
		type.forEach((t)=> {
			type_ul.insertAdjacentHTML('beforeEnd', `
			<a href="#" class="typ" id="${t.id}">${t.type}</a>
			`)
		})
	})

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('typ')) {
			axios.get(`/api/searchtype?name=${e.target.id}`).then((res) => {
				// console.log('res', res.data)
				let prooperties = res.data
				let properties_ui = document.getElementById('toprated')
				properties_ui.innerHTML = ''
				if (res.data.length) {
					prooperties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div id="property">
						<div class="img" style="background-image: url(${p.image});>
							<img src="" alt="">
						</div>
							<div class="type">
								<p>${p.city}<p>
							</div>
							<div class="name">
								<p>${p.name}</p>
							</div>
							<div class="price">
								<p>${p.price}t</p>
							</div>
							<div class="rating">
								<p>${p.rating}</p>
							</div>
						</div>
						`)
					})
				} else {
					products_ui.innerHTML = 'No products found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
	})



}
