import {Component} from '@angular/core';

@Component({
selector:'app-notas',
templateUrl:'../vistas/notas.html',
styleUrls: ['../estilos/notas.css'],
})

export class NotasComponente{
public titulo:string;
constructor(){
this.titulo='Relación de notas'
}
}
