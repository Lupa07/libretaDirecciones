import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent{
@Input() usuarioSeleccionadoMapa:any;
  
@Output() usuarioSelecionadoRespuestaMapa : EventEmitter<any> = new EventEmitter;

muestraUsuarioMapa(index:number){
  this.usuarioSelecionadoRespuestaMapa.emit(this.usuarioSeleccionadoMapa[index].direccion);
}
}
