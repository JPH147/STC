import {Component} from '@angular/core';

@Component({
selector:'app-stock',
templateUrl:'../vistas/stock.html',
styleUrls: ['../estilos/stock.css'],
})

export class StockComponente{
public titulo:string;
constructor(){
this.titulo='Relación de stock'
}
}
