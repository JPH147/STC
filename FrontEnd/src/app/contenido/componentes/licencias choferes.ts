import {Component} from '@angular/core';

@Component({
selector:'app-licenciachoferes',
templateUrl:'../vistas/licencias choferes.html',
styleUrls: ['../estilos/licencias choferes.css'],
})

export class LicenciachoferesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de licenciachoferes'
}
}
