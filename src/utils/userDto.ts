export interface UserDto {
	gender: string;
	name: Name;
	location: Location;
	email: string;
	login: Login;
	dob: Dob;
	registered: Registered;
	phone: string;
	cell: string;
	id: Id;
	picture: Picture;
	nat: string;
}

interface Name {
	title: string;
	first: string;
	last: string;
}

interface Location {
	street: Street;
	city: string;
	state: string;
	country: string;
	postcode: number;
	coordinates: Coordinates;
	timezone: Timezone;
}

interface Street {
	number: number;
	name: string;
}

interface Coordinates {
	latitude: string;
	longitude: string;
}

interface Timezone {
	offset: string;
	description: string;
}

interface Login {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

interface Dob {
	date: Date;
	age: number;
}

interface Registered {
	date: Date;
	age: number;
}

interface Id {
	name: string;
	value: string;
}

interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
}
