import {Component} from '@angular/core';

@Component({
selector:'app-numeraciondocumentos',
templateUrl:'../vistas/numeracion de documentos.html',
styleUrls: ['../estilos/numeracion de documentos.css'],
})

export class NumeraciondocumentosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de numeraciondocumentos'
}
}
