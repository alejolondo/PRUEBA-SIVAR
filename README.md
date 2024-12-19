# Proyecto

Este proyecto es una prueba técnica llamada Sivar. Está construido con Node.js y Express, utilizando una arquitectura modular y basada en la configuración de dependencias básicas para desarrollo backend.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalaci%C3%B3n)
- [Uso](#uso)
- [Scripts](#scripts)
- [Dependencias](#dependencias)
- [Autor](#autor)

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [NPM](https://www.npmjs.com/) (incluido con Node.js)
- [Nodemon](https://nodemon.io/) (instalado globalmente, opcional para el desarrollo)

## Instalación

1. Clona este repositorio o descarga el código fuente.
2. Navega al directorio del proyecto.

```bash
cd proyecto
```

3. Instala las dependencias necesarias.

```bash
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto para la configuración de las variables de entorno. Ejemplo de contenido:

```
PORT=3000
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongo_database_uri
```

## Uso

Inicia el servidor ejecutando el siguiente comando:

```bash
npm start
```

Por defecto, el servidor se iniciará en el puerto definido en tu archivo `.env` (por ejemplo, `http://localhost:3000`).

## Scripts

- **`npm start`**: Ejecuta el servidor con Nodemon para recargar automáticamente los cambios en el código.
- **`npm test`**: Comando placeholder para pruebas (actualmente no configurado).

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: Para el hashing de contraseñas.
- **[cors](https://www.npmjs.com/package/cors)**: Para habilitar CORS en el servidor.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Para manejar variables de entorno.
- **[express](https://www.npmjs.com/package/express)**: Framework web para Node.js.
- **[express-validator](https://www.npmjs.com/package/express-validator)**: Para la validación de datos en peticiones HTTP.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: Para autenticación y manejo de JWTs.
- **[mongoose](https://www.npmjs.com/package/mongoose)**: Para la conexión y manejo de bases de datos MongoDB.

## Autor

Este proyecto fue creado por **Alejandro Londoño**.

## Licencia

Este proyecto está licenciado bajo la licencia ISC. Para más información, consulta el archivo LICENSE (si está disponible).


