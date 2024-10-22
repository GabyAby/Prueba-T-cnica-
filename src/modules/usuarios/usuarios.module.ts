// src/modules/usuarios/usuarios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity'; // Asegúrate de que la ruta sea correcta

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuariosService],
    controllers: [UsuariosController],
})
export class UsuariosModule {}
