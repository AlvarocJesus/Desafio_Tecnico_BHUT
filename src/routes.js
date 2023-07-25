const { Router } = require('express');
const CarController = require('./cars/CarController');
const LogsController = require('./Logs/LogsController');
const Logs = require('./Logs/LogsModel');

const routes = Router();
const carController = new CarController();
const logsController = new LogsController();

routes.get('/listCars', carController.listAllCars);
routes.get('/createCar', carController.saveCar);
routes.get('/logs', logsController.listLogs);

routes.post('/webhook-client', async (req, res) => {
	console.log('Inside Callback hook', req.body);
	const { data } = req.body;
	await Logs.create(data);
	return res.status(200).end();
});

module.exports = routes;
