const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const {connection} = require("../config");

const getProfesor = (request, response) => {
    connection.query("SELECT * FROM profesores",
    (error, results) => {
    if(error)
    throw error;
    response.status(200).json(results);
    });
   };
   //ruta
app.route("/profesores").get(getProfesor);

const getProfesorID = (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM estudiantes where id = ?",
    [id],
    (error, results) => {
    if(error)
    console.error("Error al obtener estudiante por ID:", error);
                
    throw error;
    response.status(200).json({results});
    });
   };
app.route("/profesores/:id").get(getProfesorID);

module.exports = app;