import {Component} from '@angular/core';

@Component({
selector:'app-ordentrabajo',
templateUrl:'../vistas/orden de trabajo.html',
styleUrls: ['../estilos/orden de trabajo.css'],
})

export class OrdentrabajoComponente{
public titulo:string;
constructor(){
this.titulo='Relación de ordentrabajo'
}
}
