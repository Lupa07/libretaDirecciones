import { Component, OnInit , Input , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent {

  
  @Input ()usuarioSeleccionadoBotonera:any;
  
  @Output() usuarioSelecionadoRespuestaBotonera : EventEmitter<any> = new EventEmitter;

  botonera_usuario:any;
  
  constructor() { }

  

  crearUsuario(){

  }
  modificarUsuario(){

  }
  eliminarUsuario(){
    
    this.usuarioSeleccionadoBotonera.nombre="";
  }
}
