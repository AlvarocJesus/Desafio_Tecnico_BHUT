const mongoose = require("mongoose");
const { randomUUID } = require('crypto');

const CarsSchema = new mongoose.Schema({
	id: {
		type: "UUID",
		default: () => randomUUID(),
	},

	data_hora: mongoose.Schema.Types.Date,

	car_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Cars", CarsSchema);
