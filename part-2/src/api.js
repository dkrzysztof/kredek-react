const BASE_URL = 'http://localhost:5000';

export function fetchAllPizzas() {
	return fetch(BASE_URL + '/api/Pizza', { method: 'get' }).then((res) => res.json());
}

export function addPizza(body) {
	return fetch(BASE_URL + '/api/Pizza', {
		method: 'post',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json'
		}
	});
}

export function updatePizza(id, body) {
	return fetch(BASE_URL + '/api/Pizza/' + id, {
		method: 'put',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json'
		}
	});
}

export function deletePizza(id) {
	return fetch(BASE_URL + '/api/Pizza/' + id, {
		method: 'delete'
	});
}
