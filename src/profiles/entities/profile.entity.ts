import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  direccion: string;

  @Column({ default: true })
  isActive: boolean;
}
