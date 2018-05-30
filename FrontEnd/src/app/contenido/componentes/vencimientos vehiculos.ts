import {Component} from '@angular/core';

@Component({
selector:'app-vencimientovehiculos',
templateUrl:'../vistas/vencimientos vehiculos.html',
styleUrls: ['../estilos/vencimientos vehiculos.css'],
})

export class VencimientovehiculosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de vencimientovehiculos'
}
}
