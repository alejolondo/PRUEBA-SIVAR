Proyecto

Este proyecto es una prueba técnica llamada Sivar. Está construido con Node.js y Express, utilizando una arquitectura modular y basada en la configuración de dependencias básicas para desarrollo backend.

Tabla de Contenidos

Requisitos Previos

Instalación

Uso

Scripts

Dependencias

Autor

Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

Node.js (versión 16 o superior recomendada)

NPM (incluido con Node.js)

Nodemon (instalado globalmente, opcional para el desarrollo)

Instalación

Clona este repositorio o descarga el código fuente.

Navega al directorio del proyecto.

cd proyecto

Instala las dependencias necesarias.

npm install

Crea un archivo .env en la raíz del proyecto para la configuración de las variables de entorno. Ejemplo de contenido:

PORT=3000
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongo_database_uri

Uso

Inicia el servidor ejecutando el siguiente comando:

npm start

Por defecto, el servidor se iniciará en el puerto definido en tu archivo .env (por ejemplo, http://localhost:3000).

Scripts

npm start: Ejecuta el servidor con Nodemon para recargar automáticamente los cambios en el código.

npm test: Comando placeholder para pruebas (actualmente no configurado).

Dependencias

Este proyecto utiliza las siguientes dependencias:

bcryptjs: Para el hashing de contraseñas.

cors: Para habilitar CORS en el servidor.

dotenv: Para manejar variables de entorno.

express: Framework web para Node.js.

express-validator: Para la validación de datos en peticiones HTTP.

jsonwebtoken: Para autenticación y manejo de JWTs.

mongoose: Para la conexión y manejo de bases de datos MongoDB.

Autor

Este proyecto fue creado por Alejandro Londoño.

Licencia

Este proyecto está licenciado bajo la licencia ISC. Para más información, consulta el archivo LICENSE (si está disponible).
