import { Input } from "@angular/core";
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent{


  @Input ()usuariosPadre:any;
  
  @Output() usuarioSelecionadoRespuesta : EventEmitter<any> = new EventEmitter;
  nombre='';
  filtro_usuario:any;


  ngOnInit(): void {
    this.usuarioSelecionadoRespuesta.emit(this.usuariosPadre[0])
    this.filtro_usuario= this.usuariosPadre;
  }
  /*buscar(){
    let palabra: string = this.valorBuscador;
    this.filtro_usuario= [];

    if(palabra){
      for (var val of this.usuariosPadre) {   
        if (val.nombre.toLowerCase().indexOf(palabra.toLowerCase())>=0){
          this.filtro_usuario.push(val)
        }
      }
    }
    else{
      this.filtro_usuario=this.usuariosPadre;
    }
  }*/

  muestraUsuario(index:number){
    this.usuarioSelecionadoRespuesta.emit(this.usuariosPadre[index]);
  }

  buscarNombre(){
    this.filtro_usuario=[];

    if(this.nombre){

      for(var usuario of this.usuariosPadre){

        if(usuario.nombre.toLowerCase().indexOf(this.nombre.toLowerCase())>=0){
          this.filtro_usuario.push(usuario)
        }
      }
    }else[
      this.filtro_usuario=this.usuariosPadre
    ]

  }

  
}
