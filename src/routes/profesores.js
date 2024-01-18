const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const {connection} = require("../config");

//GET
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

//GET ID
const getProfesorID = (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM profesores where id = ?",
    [id],
    (error, results) => {
    if(error)
    throw error;
    response.status(200).json({results});
    });
   };
app.route("/profesores/:id").get(getProfesorID);

//POST
const postProfesor= (request, response) => {
    const { nombre, apellido, especialidad,correo_electronico} = request.body;
    connection.query("INSERT INTO profesores( nombre, apellido, especialidad,correo_electronico) VALUES (?,?,?,?)",
    [ nombre, apellido, especialidad,correo_electronico],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item añadido correctamente": results.affectedRows });
        });
};
app.route("/profesores").post(postProfesor)

//DELETE
const delProfesor = (request, response) => {
    const id = request.params.id;
    connection.query("Delete from profesores where id = ?",
        [id],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item eliminado": results.affectedRows });
        });
};
//ruta
app.route("/profesores/:id").delete(delProfesor);


module.exports = app;