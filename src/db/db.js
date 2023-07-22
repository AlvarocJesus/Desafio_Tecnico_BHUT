const { default: mongoose } = require("mongoose");

async function connection() {
	try {
		mongoose.set("strictQuery", false);

		await mongoose.connect(
			`mongodb+srv://alvimcoelhojesus:pE1e7heMS1I3mE7U@cluster0.5n8bboh.mongodb.net/?retryWrites=true&w=majority`,
			{
				autoIndex: true
			}
		);

		console.log("Connection successfully")
	} catch (err) {
		console.log(err);
	}
}

module.exports = connection;
