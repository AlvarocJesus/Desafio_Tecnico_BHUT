const CarService = require("./CarService");

const carService = new CarService();

class CarController {
	async listAllCars(req, res) {
		const listCars = await carService.listAllCars();

		return res.json(listCars);
	}

	async saveCar(req, res) {
		const car = req.body;

		const carSaved = await carService.saveCar(car)

		return res.json(carSaved)
	}

	async listLogs() {}
}

module.exports = CarController;
