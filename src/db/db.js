const { default: mongoose } = require("mongoose");
const config = require("../config/config");

async function connection() {
	try {
		mongoose.set("strictQuery", false);

		await mongoose.connect(
			`mongodb+srv://alvimcoelhojesus:${config.MONGO_PASSWORD}@cluster0.5n8bboh.mongodb.net/?retryWrites=true&w=majority`,
			{
				autoIndex: true,
			}
		);

		console.log("Connection successfully");
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = connection;
