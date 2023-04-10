import { DataSource } from 'typeorm';
import { User } from './model/User';
import { Location } from './model/Location';
import { Login } from './model/Login';
import { Picture } from './model/Picture';
import dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../.env' });

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB,
	synchronize: true,
	logging: false,
	entities: [User, Location, Login, Picture],
	migrations: [],
	subscribers: [],
});
