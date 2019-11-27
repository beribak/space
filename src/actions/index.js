// TODO: add and export your own actions

export function fetchCoordinates() {
	
	const promise = fetch('http://api.open-notify.org/iss-now.json')
	.then(response => response.json());

	// const data = promise.	iss_position;

	return {
		type: 'FETCH_COORDINATES',
		payload: promise 
	};
}

export function fetchImage() {
	
	const promise = fetch('https://api.nasa.gov/planetary/apod?api_key=pVlrgbmIWzg7eSqQWAisdFd8vp0FgUoiU0PdhFdF')
	.then(response => response.json());

	// const data = promise.	iss_position;

	return {
		type: 'FETCH_IMAGE',
		payload: promise 
	};
}

export function fetchArticles() {
	
	const promise = fetch('https://spaceflightnewsapi.net/api/v1/articles')
	.then(response => response.json());

	// const data = promise.	iss_position;

	return {
		type: 'FETCH_ARTICLES',
		payload: promise 
	};
}

export function fetchUserLocation(location) {
	
	const promise = fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=1dcbb3f5ff7d4fb9887a6fe151a3fd7e`)
	.then(response => response.json());

	return {
		type: 'FETCH_LOCATION',
		payload: promise 
	};
}

export function fetchPassTimes(location) {
	
	const promise = fetch(`http://api.open-notify.org/astros.json`)
	.then(response => response.json());

	return {
		type: 'FETCH_PASS_TIMES',
		payload: promise 
	};
}
