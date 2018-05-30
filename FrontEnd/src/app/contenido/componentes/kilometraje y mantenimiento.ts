import {Component} from '@angular/core';

@Component({
selector:'app-kilometraje',
templateUrl:'../vistas/kilometraje y mantenimiento.html',
styleUrls: ['../estilos/kilometraje y mantenimiento.css'],
})

export class KilometrajeComponente{
public titulo:string;
constructor(){
this.titulo='Relación de kilometraje'
}
}
