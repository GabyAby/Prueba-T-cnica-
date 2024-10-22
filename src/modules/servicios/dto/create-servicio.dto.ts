import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateServicioDto {
    @ApiProperty({ description: 'Servicio de Tecnología'})
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Asesoría tecnológica' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ description: '100' })
    @IsNumber()
    @IsNotEmpty()
    costo: number;

    @ApiProperty({ description: 'Tecnología' })
    @IsString()
    @IsNotEmpty()
    categoria: string;
}

export class CreateUsuarioDto {
    @ApiProperty({ description: 'Julian Alvarez' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'julianalvare20@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: '12345' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ description: 'Rol del usuario', enum: ['admin', 'user'] })
    @IsString()
    @IsNotEmpty()
    rol: 'admin' | 'user';
}
