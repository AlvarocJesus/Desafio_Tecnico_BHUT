const LogsRepository = require("./LogsRepository");

class LogsService {
	constructor() {
		this.logsRepository = new LogsRepository();
	}

	async listLogs() {
		return await this.logsRepository.listLogs();
	}

	async saveCar(log) {
		return await this.logsRepository.saveCar(car);
	}
}

module.exports = LogsService;
