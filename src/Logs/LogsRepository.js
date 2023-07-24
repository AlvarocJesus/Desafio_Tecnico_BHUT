const Logs = require("./LogsModel");

class LogsRepository {
	async listLogs() {
		try {
			return await Logs.find();
		} catch (err) {
			throw new Error(err);
		}
	}

	async createLogs() {
		try {
			return await Logs.save();
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = LogsRepository;
