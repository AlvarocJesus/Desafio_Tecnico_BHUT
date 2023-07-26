// eslint-disable-next-line import/no-extraneous-dependencies
const Webhooks = require('node-webhooks');
const LogsService = require('../Logs/LogsService');
const CarRepository = require('./CarRepository');

class CarService {
	constructor() {
		this.carRepository = new CarRepository();
		this.logsService = new LogsService();
	}

	async listAllCars() {
		return this.carRepository.listAllCars();
	}

	async saveCar(car) {
		const savedCar = await this.carRepository.saveCar(car);

		await this.logsService.saveLog({
			data_hora: Date.now(),
			car_id: savedCar._id,
		});

		if (savedCar) {
			const hooks = this.registerHooks();
			hooks.trigger('callback_hook', { msg: 'Novo carro adicionado', data: savedCar });
		}

		return savedCar;
	}

	async registerHooks() {
		return new Webhooks({
			db: {
				callback_hook: ['http://localhost:3000/webhook-client'],
			},
		});
	}
}

module.exports = CarService;
