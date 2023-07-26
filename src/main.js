import express, { Request, Response } from 'express';
require('express-async-error');
import cors from 'cors';
import status from 'http-status';
import routes from './routes';
import connection from './db/db';
import APIError from './error/APIError';

const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

connection();

app.use((error: Error, request: Request, response: Response) => {
	if (error instanceof APIError) {
		console.log('Erro dentro do if', error);
		return response.status(error.statusCode).json({ result: error.message });
	}

	console.log(error);

	return response.status(status.INTERNAL_SERVER_ERROR).json({ result: error.message, message: status['500_MESSAGE'] });
});

app.listen(port, () => console.log('Server ir running...'));
