var db = require ('./queries');

function http(){
  this.configurar = function(app){
    app.get('/empresas/', function (solicitud, respuesta){
      db.empresasseleccionar(respuesta);
    })

    app.get('/empresas/:id/',function(solicitud, respuesta){
      db.empresaseleccionarId(solicitud.params.id, respuesta);
    })

    app.post('/empresa/', function(solicitud, respuesta){
      db.empresainsertar(solicitud.body, respuesta);
    })

    app.get('/proveedores/', function (solicitud, respuesta){
      db.proveedoresseleccionar(respuesta);
    })

    app.get('/proveedores/:id/',function(solicitud, respuesta){
      db.proveedorseleccionarId(solicitud.params.id, respuesta);
    })

    app.post('/proveedores/:id/',function(solicitud, respuesta){
      db.proveedoreliminar(solicitud.body, respuesta);
    })

  }
}

module.exports = new http()
