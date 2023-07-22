const CarRepository = require('./CarRepository')

class CarService {
	constructor() {
		this.carRepository = new CarRepository();
	}

	async listAllCars() {
		return await this.carRepository.listAllCars();
	}

	async saveCar() {}

	async listLogs() {}
}

module.exports = CarService;
