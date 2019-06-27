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
			// console.log(properties);
			let properties_ui = document.getElementById('xyz')
			properties_ui.insertAdjacentHTML('beforeEnd', `<h2>Places to stay in ${properties[0].city}</h2>`)
			let city_ui = document.getElementById('city-prop')
			// console.log(city_ui);
			properties.forEach((p)=> {
				// console.log('p', p);
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
			console.log(e.target.id);
			axios.get(`/api/searchcity?name=${e.target.id}`).then((res) => {
				// console.log('res', res.data)
				let properties = res.data
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				properties_ui.insertAdjacentHTML('beforeEnd', `<h2>Places to stay in ${properties[0].city}</h2>
				<div id ="wraper"></div>
				`)
				let city_ui = document.getElementById('wraper')
				if (res.data.length) {
					properties.forEach((p) => {
						let star = ''
						for (i = 1; i <= p.rating; i++) {
							star += `<i class="fas fa-star"></i>`
						}
						let html = `
						<div id="search-1">
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
										<p>
											${star}
											${p.rating} stars
										</p>
									</div>
								</div>
							</div>
						</div>`
						city_ui.insertAdjacentHTML('beforeEnd', html)
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
				let properties = res.data
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				properties_ui.insertAdjacentHTML('beforeEnd', `<h2>Places to stay in ${properties[0].country}</h2>
				<div id ="wraper"></div>
				`)
				let city_ui = document.getElementById('wraper')
				if (res.data.length) {
					properties.forEach((p) => {
						let star = ''
						for (i = 1; i <= p.rating; i++) {
							star += `<i class="fas fa-star"></i>`
						}
						let html = `
						<div id="search-1">
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
										<p>
											${star}
											${p.rating} stars
										</p>
									</div>
								</div>
							</div>
						</div>`
						city_ui.insertAdjacentHTML('beforeEnd', html)
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
				let properties = res.data
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				properties_ui.insertAdjacentHTML('beforeEnd', `<h2>${properties[0].type}'s</h2>
				<div id ="wraper"></div>
				`)
				let city_ui = document.getElementById('wraper')
				if (res.data.length) {
					properties.forEach((p) => {
						// console.log(p);
						let star = ''
						for (i = 1; i <= p.rating; i++) {
							star += `<i class="fas fa-star"></i>`
						}
						let html = `
						<div id="search-1">
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
										<p>
											${star}
											${p.rating} stars
										</p>
									</div>
								</div>
							</div>
						</div>`
						city_ui.insertAdjacentHTML('beforeEnd', html)
					})
				} else {
					products_ui.innerHTML = 'No products found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
	})

	axios.get('/api/rooms').then((res) => {
		let type = res.data
		let type_ul = document.getElementById('rooms')
		type.forEach((t)=> {
			type_ul.insertAdjacentHTML('beforeEnd', `
			<a href="#" class="room" id="${t.id}">${t.rooms}</a>
			`)
		})
	})

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('room')) {
			axios.get(`/api/searchrooms?name=${e.target.id}`).then((res) => {
				// console.log('res', res.data)
				let properties = res.data
				// console.log(properties);
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				properties_ui.insertAdjacentHTML('beforeEnd', `<h2>Places with ${properties[0].rooms} Room(s)</h2>
				<div id ="wraper"></div>
				`)
				let city_ui = document.getElementById('wraper')
				if (res.data.length) {
					properties.forEach((p) => {
						let star = ''
						for (i = 1; i <= p.rating; i++) {
							star += `<i class="fas fa-star"></i>`
						}
						let html = `
						<div id="search-1">
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
										<p>
											${star}
											${p.rating} stars
										</p>
									</div>
								</div>
							</div>
						</div>`
						city_ui.insertAdjacentHTML('beforeEnd', html)
					})
				} else {
					products_ui.innerHTML = 'No products found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
	})


	let type = [
		{id: 'price1', name:'$0-5'},
		{id: 'price2', name:'$6-10'},
		{id: 'price3', name:'$11-20'},
		{id: 'price4', name:'$21-50'},
		{id: 'price5', name:'$51+'}]
	let type_ul = document.getElementById('prices')
	type.forEach((t)=> {
		type_ul.insertAdjacentHTML('beforeEnd', `
			<a href="#" id="${t.id}">${t.name}</a>
			`)
	})




	document.addEventListener('click', (e) =>{
		// console.log(e.target.id);
		let url = ''
		if (e.target.id === 'price1') {
			url += `/api/pp?min=0&max=5`
		}
		if (e.target.id === 'price2') {
			url += `/api/pp?min=6&max=10`
		}
		if (e.target.id === 'price3') {
			url += `/api/pp?min=11&max=20`
		}
		if (e.target.id === 'price4') {
			url += `/api/pp?min=21&max=50`
		}
		if (e.target.id === 'price5') {
			url += `/api/pp?min=51&max=1000`
		}
		// console.log(url);
		axios.get(url).then((res) => {
			// console.log('res', res.data)
			let prices = res.data
			// console.log(properties);
			let prices_ui = document.getElementById('properties')
			prices_ui.innerHTML = ''
			prices_ui.insertAdjacentHTML('beforeEnd', `<h2>Sorted by Price</h2>
			<div id ="wraper"></div>
			`)
			let citers_ui = document.getElementById('wraper')
			if (res.data.length) {
				prices.forEach((p) => {
					let star = ''
					for (i = 1; i <= p.rating; i++) {
						star += `<i class="fas fa-star"></i>`
					}
					let html = `
					<div id="search-1">
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
									<p>
										${star}
										${p.rating} stars
									</p>
								</div>
							</div>
						</div>
					</div>`
					citers_ui.insertAdjacentHTML('beforeEnd', html)
				})
			} else {
				prices_ui.innerHTML = 'No products found.'
			}
		}).catch((err) => {
			console.log('err', err)
		})
	})


}
