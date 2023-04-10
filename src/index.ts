import express = require('express');
import dotenv = require('dotenv');
import userRouter from './router/userRouter';
import { AppDataSource } from './data-source';

dotenv.config({ path: __dirname + '/../.env' });

const app = express();
app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 3000;

AppDataSource.initialize()
	.then(async () => {
		const server = app.listen(port, () => {
			console.log(`app and db is running port ${port}`);
		});
	})
	.catch((error) => console.log(error));
