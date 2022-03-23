import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
  @Input () usuarioSeleccionadoPadre2:any;
  @Output () datosModificar : EventEmitter<any> = new EventEmitter;
  
  
  usuario = {
    "nombre" : "",
    "apellidos" : "",
    "email": "",
    "telefono": "",
    "direccion": "",
    "codigo_postal": "",
    "poblacion": "",
    "provincia": "",
    "profesion": "",
    "notas": ""
  };

  inputNombre(nombre:any):void{
    this.usuario.nombre = nombre.value;
    this.datosModificar.emit(this.usuario);
  }
  inputApellidos(apellidos:any):void{
    this.usuario.apellidos = apellidos.value;
    this.datosModificar.emit(this.usuario);
  }
  inputEmail(email:any):void{
    this.usuario.email = email.value;
    this.datosModificar.emit(this.usuario);
  }
  inputTelefono(telefono:any):void{
    this.usuario.telefono = telefono.value;
    this.datosModificar.emit(this.usuario);
  }
  inputDireccion(direccion:any):void{
    this.usuario.direccion = direccion.value;
    this.datosModificar.emit(this.usuario);
  }
  inputCodigoPostal(codigo_postal:any):void{
    this.usuario.codigo_postal = codigo_postal.value;
    this.datosModificar.emit(this.usuario);
  }
  inputPoblacion(poblacion:any):void{
    this.usuario.poblacion = poblacion.value;
    this.datosModificar.emit(this.usuario);
  }
  inputProvincia(provincia:any):void{
    this.usuario.provincia = provincia.value;
    this.datosModificar.emit(this.usuario);
  }
  inputProfesion(profesion:any):void{
    this.usuario.profesion = profesion.value;
    this.datosModificar.emit(this.usuario);
  }
  inputNotas(notas:any):void{
    this.usuario.notas = notas.value;
    this.datosModificar.emit(this.usuario);
  }

  

}
