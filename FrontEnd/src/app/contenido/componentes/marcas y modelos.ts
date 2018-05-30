import {Component} from '@angular/core';

@Component({
selector:'app-marcamodelos',
templateUrl:'../vistas/marcas y modelos.html',
styleUrls: ['../estilos/marcas y modelos.css'],
})

export class MarcamodelosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de marcamodelos'
}
}
