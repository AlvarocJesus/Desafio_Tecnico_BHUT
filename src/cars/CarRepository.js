const Cars = require("./CarModel");

class CarRepository {
	async listAllCars() {
		try {
			return await Cars.find();
		} catch (err) {
			throw new Error(err);
		}
	}

	async saveCar() {}
}

module.exports = CarRepository;
