import {Component} from '@angular/core';

@Component({
selector:'app-seguimientodocumentos',
templateUrl:'../vistas/seguimiento de documentos.html',
styleUrls: ['../estilos/seguimiento de documentos.css'],
})

export class SeguimientodocumentosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de seguimientodocumentos'
}
}
