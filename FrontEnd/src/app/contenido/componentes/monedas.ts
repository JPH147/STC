import {Component} from '@angular/core';

@Component({
selector:'app-monedas',
templateUrl:'../vistas/monedas.html',
styleUrls: ['../estilos/monedas.css'],
})

export class MonedasComponente{
public titulo:string;
constructor(){
this.titulo='Relación de monedas'
}
}
