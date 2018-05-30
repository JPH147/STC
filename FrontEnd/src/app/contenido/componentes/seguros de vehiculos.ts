import {Component} from '@angular/core';

@Component({
selector:'app-segurovehiculos',
templateUrl:'../vistas/seguros de vehiculos.html',
styleUrls: ['../estilos/seguros de vehiculos.css'],
})

export class SegurovehiculosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de segurovehiculos'
}
}
