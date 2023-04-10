import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToOne,
	JoinColumn,
} from 'typeorm';
import { Picture } from './Picture';
import { Login } from './Login';
import { Location } from './Location';

@Entity('user')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'enum', enum: ['male', 'female'] })
	gender: string;

	@Column()
	nameTitle: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@OneToOne(() => Location)
	@JoinColumn()
	location: Location;

	@OneToOne(() => Login)
	@JoinColumn()
	login: Login;

	@Column()
	email: string;

	@Column('timestamptz')
	dateOfBirth: Date;

	@Column()
	dateOfBirthAge: number; //не очень понятно зачем статично хранить возраст

	@Column('timestamptz')
	registered: Date;

	@Column()
	registeredAge: number; //тут тоже

	@Column()
	phone: string;

	@Column()
	cell: string;

	@Column()
	idName: string;

	@Column()
	idValue: string;

	@OneToOne(() => Picture)
	@JoinColumn()
	picture: Picture;

	@Column()
	nat: string;
}
