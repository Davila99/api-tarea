import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(categoriaDto: CreateCategoriaDto) {
    const categoria = this.categoriaRepository.create(categoriaDto);
    await this.categoriaRepository.save(categoria);

    return categoria;
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return this.categoriaRepository.findOneBy({ id });
  }

  async  update(id: number, updatecategoriaDto:  UpdateCategoriaDto) {
    const findCategoria = await this.findOne(id);
    const updatecategoria = await this.categoriaRepository.merge(
      findCategoria,
      updatecategoriaDto
    );

    return this.categoriaRepository.save(updatecategoria);
  }

  
  async remove(id: number) {
    const categoria = await this.findOne(id);
    await this.categoriaRepository.remove(categoria);
    return `categoria eliminada`;
  }
}
