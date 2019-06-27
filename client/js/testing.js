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
			console.log(res.data.length);
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
