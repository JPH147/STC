import {Component} from '@angular/core';

@Component({
selector:'app-guiaremision',
templateUrl:'../vistas/guia de remision.html',
styleUrls: ['../estilos/guia de remision.css'],
})

export class GuiaremisionComponente{
public titulo:string;
constructor(){
this.titulo='Relación de guiaremision'
}
}
