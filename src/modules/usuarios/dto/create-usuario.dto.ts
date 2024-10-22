import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
    @ApiProperty({ description: 'Julian Alvarez' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'julianalvare20@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: '12345' })
    @IsNotEmpty()
    password: string;
}
