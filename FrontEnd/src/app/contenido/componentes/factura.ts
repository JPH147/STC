import {Component} from '@angular/core';

@Component({
selector:'app-factura',
templateUrl:'../vistas/factura.html',
styleUrls: ['../estilos/factura.css'],
})

export class FacturaComponente{
public titulo:string;
constructor(){
this.titulo='Relación de factura'
}
}
