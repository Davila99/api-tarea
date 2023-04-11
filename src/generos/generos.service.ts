import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
  ) {}

  async create(generoDto: CreateGeneroDto) {
    const marca = this.generoRepository.create(generoDto);
    await this.generoRepository.save(marca);

    return marca;
  }

  findAll() {
    return this.generoRepository.find();
  }

  findOne(id: number) {
    return this.generoRepository.findOneBy({ id });
  }

  async  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    const findgenero = await this.findOne(id);
    const updateProduct = await this.generoRepository.merge(
      findgenero,
      updateGeneroDto
    );

    return this.generoRepository.save(updateProduct);
  }

  
  async remove(id: number) {
    const marca = await this.findOne(id);
    await this.generoRepository.remove(marca);
    return `genero eliminada`;
  }
}
