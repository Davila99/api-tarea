import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { GenerosModule } from './generos/generos.module';
import { MarcasModule } from './marcas/marcas.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { Genero } from './generos/entities/genero.entity';
import { Ciudade } from './ciudades/entities/ciudade.entity';
import { Marca } from './marcas/entities/marca.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'hola',
    entities: [Categoria,Genero,Ciudade,Marca],
    synchronize: true,
  }),CategoriasModule, CiudadesModule, GenerosModule, MarcasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
