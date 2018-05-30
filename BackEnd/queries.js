var conexion = require('./conexion');

function MetodosDB() {

  this.empresasseleccionar = function (respuesta){
    conexion.obtener(function(er,cn){
      cn.query('select * from empresas', function(error,resultado){
        cn.release();
        if(error){
          respuesta.send({estado:'Error'})
        }else{
          respuesta.send(resultado);
        }
      })
    })
  }

  this.empresaseleccionarId = function (id,respuesta){
    conexion.obtener(function(er,cn){
      cn.query('select * from empresas where idempresa=?',id, function(error,resultado){
        cn.release();
        if(error){
          respuesta.send({estado:'Error'})
        }else{
          respuesta.send(resultado);
        }
      })
    })
  }

  this.empresainsertar = function(datos, respuesta){
    conexion.obtener(function(er,cn){
      cn.query('insert into empresas set ?', datos, function(error,resultado){
        cn.release();
        if (error) {
          respuesta.send({estado: 'Error'})
        } else{
          respuesta.send({estado: 'Todo bien!'})
        }
        })
      })
    }

    this.proveedoresseleccionar = function (respuesta){
      conexion.obtener(function(er,cn){
        cn.query('select * from proveedores where activo=1', function(error,resultado){
          cn.release();
          if(error){
            respuesta.send({estado:'Error'})
          }else{
            respuesta.send(resultado);
          }
        })
      })
    }

    this.proveedorseleccionarId = function (id,respuesta){
      conexion.obtener(function(er,cn){
        cn.query('select * from proveedores where idproveedor=?',id, function(error,resultado){
          cn.release();
          if(error){
            respuesta.send({estado:'Error'})
          }else{
            respuesta.send(resultado);
          }
        })
      })
    }

    this.proveedoreliminar = function (datos,respuesta){
      conexion.obtener(function(er,cn){
        cn.query('update proveedores set activo=0 where idproveedor=?',datos.id, function(error,resultado){
          cn.release();
          if(error){
            respuesta.send({estado:'Error'})
          }else{
            respuesta.send(resultado);
          }
        })
      })
    }
}

module.exports = new MetodosDB();
