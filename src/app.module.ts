import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { Usuario } from './modules/usuarios/entities/usuario.entity';
import { Servicio } from './modules/servicios/entities/servicio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'gabyaguirre',
      password: '2345',
      database: 'BaseDato',
      entities: [Usuario, Servicio],
      synchronize: true,
    }),
    AuthModule,
    ServiciosModule,
    UsuariosModule, 
  ],
})
export class AppModule {}

