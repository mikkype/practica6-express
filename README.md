# practica6-express
practica 6 - Express - Curco DWES - SERVIDOR DAW 2
# Instalacion
```bash
```
```bash
Creamos la carpeta src
dentro de la carpeta src usamos el comando  npm install express --save
creamos la carpeta routes donde tendremos 2 archivos estudiantes.js y profesores.js
en la carpeta src creamos el archivo app.js para controlar la api 
config.js donde los parametros para conectar a la bd
.env donde estan las variables de entorno
```
# Conexion a bd
```bash
tendremos un docker-compose y un .env con la extension npm i nodemon dotenv --save-dev
para conectar a nuestra base de datos
Luego lo levantamos y comprobar que este conectado a la bd que queremos apuntar
instalamos la extension de conexion a mysql : npm i mysql2
En config.js digitamos los parametros necesarios y exportar la coneccion
```
# Controlador API
```bash
app.js tendremos las configuraciones para el llamado de los  routes
el listen para que escuche el puerto
```
# Funcionamiento
```bash
para que podamos testear con postman en la terminal digitamos node ./app.js para que levante el puerto
```
# ROUTES
```bash
Dentro de cada ruta estudiantes y profesores digitamos los parametros necesarios ,metodos y exporte al controlador
# MÉTODO GET
Creamos un metodo con el query requerido ,comprobaciones y los instanciamos
# MÉTODO GET ID
Creamos un metodo con el query requerido ,comprobaciones y los instanciamos
# MÉTODO POST
Creamos un metodo con el query requerido ,comprobaciones y los instanciamos
# METODO PUT
Creamos un metodo con el query requerido ,comprobaciones y los instanciamos
# MÉTODO DELETE
Creamos un metodo con el query requerido ,comprobaciones y los instanciamos
```