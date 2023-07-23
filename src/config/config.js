const dotenv = require('dotenv').config();

if (dotenv.error) {
	throw dotenv.error;
}

module.exports = {
	MONGO_PASSWORD: process.env.MONGO_PASSWORD,
};
