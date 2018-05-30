import {Component} from '@angular/core';

@Component({
selector:'app-tipovehiculos',
templateUrl:'../vistas/tipo de vehiculos.html',
styleUrls: ['../estilos/tipo de vehiculos.css'],
})

export class TipovehiculosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de tipovehiculos'
}
}
