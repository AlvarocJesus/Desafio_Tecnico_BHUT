const CarService = require("./CarService");

const carService = new CarService();

class CarController {
	async listAllCars(req, res) {
		const listCars = await carService.listAllCars();

		return res.json(listCars);
	}

	async saveCar() {}

	async listLogs() {}
}

module.exports = CarController;
