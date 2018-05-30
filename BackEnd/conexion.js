var mysql = require ('mysql');

function conexion(){
  this.pool = null;
  this.iniciar = function(){
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: '192.168.1.20',
      user: 'genus_jph',
      password:'JP2953116*',
      database:'genus_transporte'
    })
  }

  this.obtener = function(callback){
    this.pool.getConnection(function(error,conexion){
      callback(error,conexion);
    })
  }
}

module.exports = new conexion();
