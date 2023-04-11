import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Genero {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    descripcion: string;
}
