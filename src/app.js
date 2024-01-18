var express = require("express");
var app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes/estudiantes'));
app.use(require('./routes/profesores'));

app.listen(3000, function () {
 console.log("Aplicación ejemplo, escuchando el puerto 3000!");
})

module.exports = app;
