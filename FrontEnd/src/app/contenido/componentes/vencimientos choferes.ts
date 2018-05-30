import {Component} from '@angular/core';

@Component({
selector:'app-vencimientochoferes',
templateUrl:'../vistas/vencimientos choferes.html',
styleUrls: ['../estilos/vencimientos choferes.css'],
})

export class VencimientochoferesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de vencimientochoferes'
}
}
