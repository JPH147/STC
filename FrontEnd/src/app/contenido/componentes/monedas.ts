import {Component} from '@angular/core';
import {ElectronService} from 'ngx-electron'

@Component({
selector:'app-monedas',
templateUrl:'../vistas/monedas.html',
styleUrls: ['../estilos/monedas.css'],
})

export class MonedasComponente{


  public titulo:string;
  constructor(
    private electron:ElectronService,
  ){
  this.titulo='Relación de monedas';
  this.PruebaEA();
  this.RemoteJP()
  }

  public PruebaEA(){
    if (this.electron.isElectronApp){
      this.electron.ipcRenderer.send('PruebaComunicacion')
      this.electron.ipcRenderer.on('PruebaComunicacion2', function(event,arg){
        console.log(arg)
      })
    }
  }

  public RemoteJP(){
    if (this.electron.isElectronApp){
      let windows = new this.electron.remote.BrowserWindow();
      windows.loadURL('www.google.com')
  }}


}
