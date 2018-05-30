function PermitirAcesso(){
  this.permisos = function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods','GET, POST');
    next();
  }
}

module.exports = new PermitirAcesso()
