import {Component} from '@angular/core';

@Component({
selector:'app-segurochoferes',
templateUrl:'../vistas/seguros de choferes.html',
styleUrls: ['../estilos/seguros de choferes.css'],
})

export class SegurochoferesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de segurochoferes'
}
}
