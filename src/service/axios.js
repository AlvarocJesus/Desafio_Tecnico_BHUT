const { default: axios, AxiosHeaders } = require("axios");

// class AxiosService {
async function find() {
	try {
		const data = await axios.get("http://api-test.bhut.com.br:3000/api/cars", {
			headers: { Accept: "application/json" },
		});

		console.log({ data: data.data });
	} catch (err) {
		console.log({ err });
	}
}
// }
find();
