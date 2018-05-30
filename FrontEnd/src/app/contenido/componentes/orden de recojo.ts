import {Component} from '@angular/core';

@Component({
selector:'app-ordenrecojo',
templateUrl:'../vistas/orden de recojo.html',
styleUrls: ['../estilos/orden de recojo.css'],
})

export class OrdenrecojoComponente{
public titulo:string;
constructor(){
this.titulo='Relación de ordenrecojo'
}
}
