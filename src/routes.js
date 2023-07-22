const { Router } = require("express");
const CarController = require("./cars/CarController");

const routes = Router();
const carController = new CarController();

routes.get("/listCars", carController.listAllCars);
routes.get("/createCar", carController.saveCar);
routes.get("/logs", carController.listLogs);

module.exports = routes;
