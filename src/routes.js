const { Router } = require("express");
const CarController = require("./cars/CarController");
const LogsController = require("./Logs/LogsController");

const routes = Router();
const carController = new CarController();
const logsController = new LogsController();

routes.get("/listCars", carController.listAllCars);
routes.get("/createCar", carController.saveCar);
routes.get("/logs", logsController.listLogs);

module.exports = routes;
