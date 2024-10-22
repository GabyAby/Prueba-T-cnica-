import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully.' })
    async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.usuariosService.create(createUsuarioDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieve all users' })
    @ApiResponse({ status: 200, description: 'List of users.' })
    async findAll(): Promise<Usuario[]> {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a user by ID' })
    @ApiResponse({ status: 200, description: 'User found.' })
    async findOneById(@Param('id') id: number): Promise<Usuario> {
        return this.usuariosService.findOneById(id);
    }
}
