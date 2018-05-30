import {Component} from '@angular/core';

@Component({
selector:'app-manifiesto',
templateUrl:'../vistas/manifiesto.html',
styleUrls: ['../estilos/manifiesto.css'],
})

export class ManifiestoComponente{
public titulo:string;
constructor(){
this.titulo='Relación de manifiesto'
}
}
