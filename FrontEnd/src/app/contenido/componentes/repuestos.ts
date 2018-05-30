import {Component} from '@angular/core';

@Component({
selector:'app-repuestos',
templateUrl:'../vistas/repuestos.html',
styleUrls: ['../estilos/repuestos.css'],
})

export class RepuestosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de repuestos'
}
}
