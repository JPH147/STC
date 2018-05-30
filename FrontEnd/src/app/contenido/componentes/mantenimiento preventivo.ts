import {Component} from '@angular/core';

@Component({
selector:'app-mantenimientopreventivo',
templateUrl:'../vistas/mantenimiento preventivo.html',
styleUrls: ['../estilos/mantenimiento preventivo.css'],
})

export class MantenimientopreventivoComponente{
public titulo:string;
constructor(){
this.titulo='Relación de mantenimientopreventivo'
}
}
