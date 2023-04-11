import { Injectable } from '@nestjs/common';
import { CreateCiudadeDto } from './dto/create-ciudade.dto';
import { UpdateCiudadeDto } from './dto/update-ciudade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudade } from './entities/ciudade.entity';

@Injectable()
export class CiudadesService {
  constructor(
    @InjectRepository(Ciudade)
    private ciudadRepository: Repository<Ciudade>,
  ) {}

  
  async create(ciudadDto: CreateCiudadeDto) {
    const ciudad = this.ciudadRepository.create(ciudadDto);
    await this.ciudadRepository.save(ciudad);

    return ciudad;
  }

  findAll() {
    return this.ciudadRepository.find();
  }

  findOne(id: number) {
    return this.ciudadRepository.findOneBy({ id });
  }

  async  update(id: number, updateCiudadDto: UpdateCiudadeDto) {
    const findciudad = await this.findOne(id);
    const updateProduct = await this.ciudadRepository.merge(
      findciudad,
      updateCiudadDto
    );

    return this.ciudadRepository.save(updateProduct);
  }

  async remove(id: number) {
    const ciudad = await this.findOne(id);
    await this.ciudadRepository.remove(ciudad);
    return `Ciudad eliminada`;
  }
}
