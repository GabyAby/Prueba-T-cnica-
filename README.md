# Servicio de Usuarios

Este proyecto es una API para la gestión de usuarios y servicios, construida con NestJS y TypeORM.

## Requisitos Previos

Tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)

## Clonar el Repositorio

Para clonar este repositorio, utiliza el siguiente comando:

```bash
git clone https://github.com/GabyAby/Prueba-Tecnica.git
```

## Instalación

### Migrar la Base de Datos

```bash
npm run typeorm:migrate

npm run typeorm:revert
```

En la raiz del proyecto crear un archivo .env con la siguiente estructura

```bash
   DB_HOST=valor
   DB_PORT=valor
   DB_USERNAME=valor
   DB_PASSWORD=valor
   DB_NAME=valor
   JWT_SECRET=valor
   JWT_EXPIRES_IN=1h
```

Asegúrate de reemplazar los valores correctos.s

### Ejecutar Seeders

Para cargar datos iniciales en la base de datos, puedes ejecutar el siguiente comando:

### Copiar código

```bash
npm run seed
```

### Documentación

La documentación de la API está disponible a través de Swagger. Para acceder a ella, inicia el servidor y navega a:

```bash
http://localhost:3000/api
```

## Iniciar el Proyecto

Para iniciar el proyecto en modo desarrollo, ejecuta:

```bash
npm run start:dev
```

