// src/modules/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const usuario = this.usuarioRepository.create(createUsuarioDto);
        return this.usuarioRepository.save(usuario);
    }

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    async findOneById(id: number): Promise<Usuario> {
        return this.usuarioRepository.findOneBy({ id });
    }
}
