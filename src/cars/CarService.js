const LogsService = require('../Logs/LogsService');
const CarRepository = require('./CarRepository');

class CarService {
	constructor() {
		this.carRepository = new CarRepository();
		this.logsService = new LogsService();
	}

	async listAllCars() {
		return await this.carRepository.listAllCars();
	}

	async saveCar(car) {
		const savedCar = await this.carRepository.saveCar(car);

		await this.logsService.saveLog({
			id: 1,
			data_hora: Date.now(),
			car_id: 2,
		});

		return savedCar;
	}

	async listLogs() {}
}

module.exports = CarService;
