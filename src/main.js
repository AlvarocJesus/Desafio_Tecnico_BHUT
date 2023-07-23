const express = require("express");
require('express-async-error')
const cors = require("cors");
const routes = require("./routes");
const connection = require("./db/db");
const status = require("http-status");

/* mongoose.connect("mongodb://localhost:27017/join-backend", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
}); */

const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

connection();

app.use((error, request, response) => {
	if (error instanceof APIError) {
		console.log('Erro dentro do if', error);
		return response.status(error.statusCode).json({ result: error.message });
	}

	console.log(error);

	return response.status(status.INTERNAL_SERVER_ERROR).json({ result: error.message, message: status['500_MESSAGE'] });
});

app.listen(port, () => console.log("Server ir running..."));
