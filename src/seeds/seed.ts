import { DataSource } from 'typeorm';
import { Servicio } from '../modules/servicios/entities/servicio.entity';

async function seed() {
    const AppDataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'gabyaguirre',
        password: '2345',
        database: 'BaseDato',
        entities: [Servicio], 
        synchronize: true,
    });

    await AppDataSource.initialize();
    const serviceRepository = AppDataSource.getRepository(Servicio);

    // Crear servicios
    const services = [
        { nombre: 'Servicio de Tecnología', descripcion: 'Asesoría tecnológica', costo: 100, categoria: 'Tecnología' },
        { nombre: 'Servicio de Salud', descripcion: 'Consultoría médica', costo: 150, categoria: 'Salud' },
        { nombre: 'Servicio de Hogar', descripcion: 'Reparaciones en el hogar', costo: 80, categoria: 'Hogar' },
        { nombre: 'Servicio de Transporte', descripcion: 'Transporte privado', costo: 200, categoria: 'Transporte' },
        { nombre: 'Servicio de Limpieza', descripcion: 'Limpieza profunda', costo: 60, categoria: 'Hogar' },
    ];

    for (const service of services) {
        
        const newService = serviceRepository.create(service as Servicio);
        await serviceRepository.save(newService);
    }

    console.log('Base de datos inicializada con servicios.');
    await AppDataSource.destroy();
}

seed().catch(error => {
    console.error('Error durante la inicialización de datos:', error);
    process.exit(1);
});
