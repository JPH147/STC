import {Component} from '@angular/core';

@Component({
selector:'app-liquidaciones',
templateUrl:'../vistas/liquidaciones.html',
styleUrls: ['../estilos/liquidaciones.css'],
})

export class LiquidacionesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de liquidaciones'
}
}
