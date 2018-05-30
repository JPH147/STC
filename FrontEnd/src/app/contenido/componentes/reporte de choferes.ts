import {Component} from '@angular/core';

@Component({
selector:'app-reportechoferes',
templateUrl:'../vistas/reporte de choferes.html',
styleUrls: ['../estilos/reporte de choferes.css'],
})

export class ReportechoferesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de reportechoferes'
}
}
