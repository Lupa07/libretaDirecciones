import { Component, OnInit , Input , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent {

  
  @Output() cambiosListaRespuesta : EventEmitter<any> = new EventEmitter;

  presionarBoton(datos:string){
    console.log(datos);
    this.cambiosListaRespuesta.emit(datos);
  }
}


