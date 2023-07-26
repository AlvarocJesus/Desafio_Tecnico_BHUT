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

		const log = await this.logsService.saveLog({
			data_hora: Date.now(),
			car_id: savedCar._id,
		});

		this.queue.enqueue(log);

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
