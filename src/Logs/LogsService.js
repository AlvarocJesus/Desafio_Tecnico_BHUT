const LogsRepository = require('./LogsRepository');

class LogsService {
	constructor() {
		this.logsRepository = new LogsRepository();
	}

	async listLogs() {
		return await this.logsRepository.listLogs();
	}

	async saveLog(log) {
		return await this.logsRepository.createLogs(log);
	}
}

module.exports = LogsService;
