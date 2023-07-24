const LogsService = require("./LogsService");

const logsService = new LogsService();

class LogsController {
	async listLogs(req, res) {
		const listCars = await logsService.listLogs();

		return res.json(listCars);
	}
}

module.exports = LogsController;
