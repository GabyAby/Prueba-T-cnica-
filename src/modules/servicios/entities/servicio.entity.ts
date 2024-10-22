import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity()
export class Servicio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column('decimal', { precision: 10, scale: 2 }) // Define precisión y escala
    costo: number;

    @Column()
    categoria: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    deletedAt: Date;

    @ManyToMany(() => Usuario, usuario => usuario.servicios)
    @JoinTable() // Necesario para la relación de muchos a muchos
    usuarios: Usuario[];
}
