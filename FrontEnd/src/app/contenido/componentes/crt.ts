import {Component} from '@angular/core';

@Component({
selector:'app-crt',
templateUrl:'../vistas/crt.html',
styleUrls: ['../estilos/crt.css'],
})

export class CrtComponente{
public titulo:string;
constructor(){
this.titulo='Relación de crt'
}
}
