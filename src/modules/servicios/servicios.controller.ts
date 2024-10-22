import { Controller, Post, Body, Get } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto'; 
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('servicios')
@Controller('servicios')
export class ServiciosController {
    constructor(private readonly serviciosService: ServiciosService) {}

    @ApiOperation({ summary: 'Crear un nuevo servicio' })
    @ApiResponse({ status: 201, description: 'Servicio creado exitosamente.' })
    @Post()
    async create(@Body() createServicioDto: CreateServicioDto) {
        return this.serviciosService.create(createServicioDto);
    }

    @ApiOperation({ summary: 'Obtener todos los servicios' })
    @ApiResponse({ status: 200, description: 'Lista de servicios.' })
    @Get()
    async findAll() {
        return this.serviciosService.findAll();
    }
}
