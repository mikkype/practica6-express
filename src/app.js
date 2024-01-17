var express = require("express");
var app = express();
app.get("/test", function (req, res) {
 res.send("Hola Mundo UBUNTU test!");
});

app.listen(3000, function () {
 console.log("Aplicación ejemplo, escuchando el puerto 3000!");
})