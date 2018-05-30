import {Component} from '@angular/core';

@Component({
selector:'app-movimientos',
templateUrl:'../vistas/movimientos.html',
styleUrls: ['../estilos/movimientos.css'],
})

export class MovimientosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de movimientos'
}
}
