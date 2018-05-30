import {Component} from '@angular/core';

@Component({
selector:'app-almacenes',
templateUrl:'../vistas/almacenes.html',
styleUrls: ['../estilos/almacenes.css'],
})

export class AlmacenesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de almacenes'
}
}
