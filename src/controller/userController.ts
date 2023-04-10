import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { Location } from '../model/Location';
import { UserDto } from '../utils/userDto';
import { Picture } from '../model/Picture';
import { User } from '../model/User';
import { Login } from '../model/Login';
import { AppDataSource } from '../data-source';

export async function createUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const newUser: UserDto = (await axios.get('https://randomuser.me/api/'))
			.data.results[0];
		if (!newUser) {
			res.status(500).json({
				msg: 'requested user is empty',
			});
		} else {
			const location = new Location();
			location.streenName = newUser.location.street.name;
			location.streenNumber = newUser.location.street.number;
			location.city = newUser.location.city;
			location.state = newUser.location.state;
			location.country = newUser.location.country;
			location.postcode = newUser.location.postcode.toString();
			location.latitude = newUser.location.coordinates.latitude;
			location.longitude = newUser.location.coordinates.longitude;
			location.timezoneOffset = newUser.location.timezone.offset;
			location.timezoneDescription = newUser.location.timezone.description;
			await AppDataSource.manager.save(location);

			const login = new Login();
			login.uuid = newUser.login.uuid;
			login.username = newUser.login.username;
			login.password = newUser.login.password;
			login.salt = newUser.login.salt;
			login.md5 = newUser.login.md5;
			login.sha1 = newUser.login.sha1;
			login.sha256 = newUser.login.sha256;
			await AppDataSource.manager.save(login);

			const picture = new Picture();
			picture.large = newUser.picture.large;
			picture.medium = newUser.picture.medium;
			picture.thumbnail = newUser.picture.thumbnail;
			await AppDataSource.manager.save(picture);

			const user = new User();
			user.gender = newUser.gender;
			user.nameTitle = newUser.name.title;
			user.firstName = newUser.name.first;
			user.lastName = newUser.name.last;
			user.location = location;
			user.login = login;
			user.email = newUser.email;
			user.dateOfBirth = newUser.dob.date;
			user.dateOfBirthAge = newUser.dob.age;
			user.registered = newUser.registered.date;
			user.registeredAge = newUser.registered.age;
			user.phone = newUser.phone;
			user.cell = newUser.cell;
			user.idName = newUser.id.name;
			user.idValue = newUser.id.value;
			user.picture = picture;
			user.nat = newUser.nat;
			await AppDataSource.manager.save(user);

			res.status(200).json({
				data: newUser,
			});
		}
	} catch (e) {
		res.status(500).json({
			msg: e._message,
		});
	}
}

export async function getAllUsers(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const users = await AppDataSource.getRepository(User).find({
			relations: {
				picture: true,
				login: true,
				location: true,
			},
		});
		if (!users.length) {
			res.status(404).json({
				msg: 'users not found',
			});
		} else {
			res.status(200).json({
				data: users,
			});
		}
	} catch (e) {
		res.status(500).json({
			msg: e._message,
		});
	}
}
