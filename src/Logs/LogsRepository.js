const Logs = require("./LogsModel");

class LogsRepository {
	async listLogs() {
		try {
			return await Logs.find();
		} catch (err) {
			throw new Error(err);
		}
	}

	async createLogs(log) {
		try {
			return await Logs.create(log);
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = LogsRepository;
