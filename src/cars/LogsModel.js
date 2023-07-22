const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const LogsSchema = new mongoose.Schema(
	{
		/* id: {
		type: UUID,
		default: () => randomUUID(),
	}, */

		log: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Logs = mongoose.model("Logs", LogsSchema);

module.exports = Logs;
