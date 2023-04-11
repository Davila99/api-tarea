import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Ciudade {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    descripcion: string;
}
