import {Component} from '@angular/core';

@Component({
  selector:'app-articulos',
  templateUrl:'../vistas/articulos.html',
  styleUrls: ['../estilos/articulos.css'],
})

export class ArticulosComponente{
  public titulo:string;

  constructor(){
    this.titulo='Relación de artículos'
  }
}
