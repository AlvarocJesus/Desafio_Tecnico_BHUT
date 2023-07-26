const { BASE_URL } = require('../config/config');

// eslint-disable-next-line import/order
const axios = require('axios').default;

class AxiosService {
	async find() {
		try {
			const data = await axios.get(`${BASE_URL}`, {
				headers: { Accept: 'application/json' },
			});

			return data.data;
		} catch (err) {
			throw new Error(err);
		}
	}

	async save(car) {
		try {
			const data = await axios.post(`${BASE_URL}`, car, {
				headers: { Accept: 'application/json' },
			});

			return data.data;
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = AxiosService;
