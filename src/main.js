const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/join-backend", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => console.log("Server ir running..."));
