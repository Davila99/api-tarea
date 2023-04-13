
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
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

  @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
  user: User
}
