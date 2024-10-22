import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Habilitar la validación global
    app.useGlobalPipes(new ValidationPipe({
        transform: true, // Convierte el objeto a la instancia del DTO
        whitelist: true, // Elimina propiedades no esperadas
    }));

    const config = new DocumentBuilder()
        .setTitle('User and Service API')
        .setDescription('API for managing users and services')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
