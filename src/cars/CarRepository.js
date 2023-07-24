const AxiosService = require("../service/axios");

class CarRepository {
	constructor() {
		this.axiosService = new AxiosService();
	}

	async listAllCars() {
		try {
			return await this.axiosService.find();
		} catch (err) {
			throw new Error(err);
		}
	}

	async saveCar(car) {
		try {
			return await this.axiosService.save(car)
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = CarRepository;
