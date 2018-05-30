import {Component} from '@angular/core';

@Component({
selector:'app-rutas',
templateUrl:'../vistas/rutas.html',
styleUrls: ['../estilos/rutas.css'],
})

export class RutasComponente{
public titulo:string;
constructor(){
this.titulo='Relación de rutas'
}
}
