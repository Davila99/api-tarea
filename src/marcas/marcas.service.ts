import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private marcaRepository: Repository<Marca>,
  ) {}

  async create(marcaDto: CreateMarcaDto) {
    const marca = this.marcaRepository.create(marcaDto);
    await this.marcaRepository.save(marca);

    return marca;
  }

  findAll() {
    return this.marcaRepository.find();
  }

  findOne(id: number) {
    return this.marcaRepository.findOneBy({ id });
  }

  async  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    const findmarca = await this.findOne(id);
    const updateProduct = await this.marcaRepository.merge(
      findmarca,
      updateMarcaDto
    );

    return this.marcaRepository.save(updateProduct);
  }

  async remove(id: number) {
    const marca = await this.findOne(id);
    await this.marcaRepository.remove(marca);
    return `categoria eliminada`;
  }
}
