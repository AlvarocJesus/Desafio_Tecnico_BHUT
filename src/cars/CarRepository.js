const Cars = require("./CarModel");

class CarRepository {
	async listAllCars() {
		return await Cars.find();
	}

	async saveCar() {}

	async listLogs() {}
}

module.exports = CarRepository;
