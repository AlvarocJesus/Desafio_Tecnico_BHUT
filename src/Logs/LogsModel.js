const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const LogsSchema = new mongoose.Schema(
	{
		id: {
			type: mongoose.Schema.Types.UUID,
			default: () => randomUUID(),
		},

		data_hora: {
			type: Date,
			required: true,
		},

		car_id: {
			type: Number, //ObjectId,
			required: true,
		},
	},
	{ timestamps: true }
);

const Logs = mongoose.model("Logs", LogsSchema);

module.exports = Logs;
