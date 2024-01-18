const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const {connection} = require("../config");

//GET 
const getEstudiante = (request, response) => {
    connection.query("SELECT * FROM estudiantes",
    (error, results) => {
    if(error)
    throw error;
    response.status(200).json(results);
    });
   };

app.route("/estudiantes").get(getEstudiante);

//GET : ID
const getEstudianteID = (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM estudiantes WHERE id = ?",
    [id],
    (error, results) => {
    if(error)
    throw error;
    response.status(201).json({results});
    });
   };
app.route("/estudiantes/:id").get(getEstudianteID);

//POST
const postEstudiante = (request, response) => {
    const {nombre,apellido,fecha_nacimiento,direccion,telefono} = request.body;
    connection.query("INSERT INTO estudiantes(nombre,apellido,fecha_nacimiento,direccion,telefono) VALUES (?,?,?,?,?)",
    
    [nombre,apellido,fecha_nacimiento,direccion,telefono],
    (error, results) => {
    if(error)
    throw error;
    response.status(201).json({"Item añadido correctamente": results.affectedRows});
    });
   };
  
   app.route("/estudiantes").post(postEstudiante)

   //DELETE
   const delEstudiante = (request, response) => {
    const id = request.params.id;
    connection.query("Delete from estudiantes where id = ?",
    [id],
    (error, results) => {
    if(error)
    throw error;
    response.status(201).json({"Item eliminado":results.affectedRows});
    });
   };
   //ruta
   app.route("/estudiantes/:id").delete(delEstudiante);
   

module.exports = app;