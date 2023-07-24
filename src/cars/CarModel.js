const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const CarsSchema = new mongoose.Schema(
	{
		data_hora: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);

const Cars = mongoose.model("Cars", CarsSchema);

module.exports = Cars;
