const axios = require('axios').default;

class AxiosService {
	async find() {
		try {
			const data = await axios.get('http://api-test.bhut.com.br:3000/api/cars', {
				headers: { Accept: 'application/json' },
			});

			console.log({ data: data.data });
		} catch (err) {
			console.log({ err });
		}
	}

	async save(car) {
		try {
			const data = await axios.post('http://api-test.bhut.com.br:3000/api/cars', car, {
				headers: { Accept: 'application/json' },
			});

			console.log({ data: data.data });
		} catch (err) {
			console.log({ err });
		}
	}
}
// find();

module.exports = AxiosService;
