console.log('script.js is connected');

window.onload = () => {

	axios.get('/api/properties').then((res) => {
		let properties = res.data
		let properties_ul = document.getElementById('toprated')
		properties.forEach((p) => {
			properties_ul.insertAdjacentHTML('beforeEnd', `
			<div id="property">
			<div class="img" style="background-image: url(https://res.cloudinary.com/dg3lfqtcg/image/upload/v1561447428/boho-bar-restaurant_qhq2da.jpg);>
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
	}).catch((err) => {
		console.log('err', err)
	})



	axios.get('/api/cities').then((res) => {
		let city = res.data
		let city_ul = document.getElementById('city')
		city.forEach((c)=> {
			city_ul.insertAdjacentHTML('beforeEnd', `
			<li><a href="#" class="refine" id="${c.id}">${c.name}</a></li>
			`)
		})
	})


	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('refine')) {
			axios.get(`/api/searchcity?name=${e.target.id}`).then((res) => {
				// console.log('res', res.data)
				let prooperties = res.data
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				if (res.data.length) {
					prooperties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div id="property">
							<div class="type">
								<h2>${p.city}</h2>
							</div>
							<div class="name">
								<h2>${p.name}</h2>
							</div>
							<div class="price">
								<p>${p.price}t</p>
							</div>
							<div class="rating">
								<small>${p.rating}</small>
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
			<li><a href="#" class="refine" id="${c.id}">${c.name}</a></li>
			`)
		})
	})


	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('refine')) {
			axios.get(`/api/searchcountries?name=${e.target.id}`).then((res) => {
				console.log('res', res.data)
				let prooperties = res.data
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				if (res.data.length) {
					prooperties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div id="property">
							<div class="type">
								<h2>${p.city}</h2>
							</div>
							<div class="name">
								<h2>${p.name}</h2>
							</div>
							<div class="price">
								<p>${p.price}t</p>
							</div>
							<div class="rating">
								<small>${p.rating}</small>
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
			<li><a href="#" class="refine" id="${t.id}">${t.type}</a></li>
			`)
		})
	})

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('refine')) {
			axios.get(`/api/searchtype?name=${e.target.id}`).then((res) => {
				console.log('res', res.data)
				let prooperties = res.data
				let properties_ui = document.getElementById('properties')
				properties_ui.innerHTML = ''
				if (res.data.length) {
					prooperties.forEach((p) => {
						properties_ui.insertAdjacentHTML('beforeEnd', `
						<div id="property">
							<div class="type">
								<h2>${p.city}</h2>
							</div>
							<div class="name">
								<h2>${p.name}</h2>
							</div>
							<div class="price">
								<p>${p.price}t</p>
							</div>
							<div class="rating">
								<small>${p.rating}</small>
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
