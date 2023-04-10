import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('login')
export class Login {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	uuid: string;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column()
	salt: string;

	@Column()
	md5: string;

	@Column()
	sha1: string;

	@Column()
	sha256: string;
}
