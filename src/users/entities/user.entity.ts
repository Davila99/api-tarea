import { Profile } from 'src/profiles/entities/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({length:20})
    username: string;

    @Column()
    password: string;
    @OneToOne(() => Profile, (profile) => profile.user,{ 
        onDelete: 'CASCADE' 
      }) 
    @JoinColumn()
    profile: Profile
}
