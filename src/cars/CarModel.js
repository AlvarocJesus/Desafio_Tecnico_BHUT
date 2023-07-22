const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const CarsSchema = new mongoose.Schema(
	{
		/* id: {
		type: UUID,
		default: () => randomUUID(),
	}, */

		data_hora: {
			type: Date,
			required: true,
		},

		car_id: {
			type: ObjectId,
			required: true,
		},
	},
	{ timestamps: true }
);

const Cars = mongoose.model("Cars", CarsSchema);

module.exports = Cars;
