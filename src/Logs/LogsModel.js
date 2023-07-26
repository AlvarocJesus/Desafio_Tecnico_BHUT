const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema(
	{
		data_hora: {
			type: Date,
			required: true,
		},

		car_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	},
	{ timestamps: true, autoIndex: true }
);

const Logs = mongoose.model('Logs', LogsSchema);

module.exports = Logs;
