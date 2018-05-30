import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector:'app-clientes',
  templateUrl:'../vistas/clientes.html',
  styleUrls: ['../estilos/clientes.css'],
})

export class ClientesComponente{
  public titulo:string;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.titulo='Relación de clientes'
  }

  ngOnInit(){
    this.myForm = this.fb.group({
      ruc: '',
      razon_social:'',
      observacion:''
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
