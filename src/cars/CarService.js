// eslint-disable-next-line import/no-extraneous-dependencies
const Webhooks = require('node-webhooks');
const LogsService = require('../Logs/LogsService');
const Queue = require('../Queue/Queue');
const CarRepository = require('./CarRepository');

class CarService {
	constructor() {
		this.carRepository = new CarRepository();
		this.logsService = new LogsService();
		this.queue = new Queue();
	}

	async listAllCars() {
		return this.carRepository.listAllCars();
	}

	async saveCar(car) {
		const savedCar = await this.carRepository.saveCar(car);

		await this.logsService.saveLog({
			id: 1,
			data_hora: Date.now(),
			car_id: 2,
		});

		this.queue.enqueue({
			id: 1,
			data_hora: Date.now(),
			car_id: 2,
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
				callback_hook: ['http://localhost:8005/webhook-client'],
			},
		});
	}
}

module.exports = CarService;
