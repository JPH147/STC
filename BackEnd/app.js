const express = require ('express');
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var conexion = require ('./conexion');
var rutas = require ('./rutas');
var cors = require ('./cors');

app.use(cors.permisos)
conexion.iniciar();
rutas.configurar(app);

var server = app.listen(8000, function(){
  console.log('Puerto', server.address().port);
})

module.exports = app;
