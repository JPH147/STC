import {Component} from '@angular/core';

@Component({
selector:'app-mantenimientocorrectivo',
templateUrl:'../vistas/mantenimiento correctivo.html',
styleUrls: ['../estilos/mantenimiento correctivo.css'],
})

export class MantenimientocorrectivoComponente{
public titulo:string;
constructor(){
this.titulo='Relación de mantenimientocorrectivo'
}
}
