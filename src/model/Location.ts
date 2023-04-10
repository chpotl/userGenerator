import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	Point,
	OneToMany,
	OneToOne,
	JoinColumn,
} from 'typeorm';

@Entity('location')
export class Location {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	streenNumber: number;

	@Column()
	streenName: string;

	@Column()
	city: string;

	@Column()
	state: string;

	@Column()
	country: string;

	@Column()
	postcode: string;

	@Column()
	latitude: string;

	@Column()
	longitude: string;

	@Column()
	timezoneOffset: string;

	@Column()
	timezoneDescription: string;
}
