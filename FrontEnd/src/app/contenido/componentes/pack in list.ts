import {Component} from '@angular/core';

@Component({
selector:'app-packinlist',
templateUrl:'../vistas/pack in list.html',
styleUrls: ['../estilos/pack in list.css'],
})

export class PackinlistComponente{
public titulo:string;
constructor(){
this.titulo='Relación de packinlist'
}
}
