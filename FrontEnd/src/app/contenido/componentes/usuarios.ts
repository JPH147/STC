import {Component} from '@angular/core';

@Component({
selector:'app-usuarios',
templateUrl:'../vistas/usuarios.html',
styleUrls: ['../estilos/usuarios.css'],
})

export class UsuariosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de usuarios'
}
}
