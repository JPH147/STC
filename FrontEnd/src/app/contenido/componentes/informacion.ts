import {Component} from '@angular/core';

@Component({
selector:'app-informacion',
templateUrl:'../vistas/informacion.html',
styleUrls: ['../estilos/informacion.css'],
})

export class InformacionComponente{
public titulo:string;
constructor(){
this.titulo='Relación de informacion'
}
}
