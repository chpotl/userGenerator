import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('picture')
export class Picture {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	large: string;

	@Column()
	medium: string;

	@Column()
	thumbnail: string;
}
