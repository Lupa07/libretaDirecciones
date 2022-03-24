import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
  @Input() usuarioSeleccionadoPadre2: any;
  @Output() datosModificar: EventEmitter<any> = new EventEmitter;


  usuario = {
    "nombre": "",
    "apellidos": "",
    "email": "",
    "telefono": "",
    "direccion": "",
    "codigo_postal": "",
    "poblacion": "",
    "provincia": "",
    "profesion": "",
    "notas": ""
  };

  inputNombre(nombre: any) {
    this.usuario.nombre = nombre.value;
    this.datosModificar.emit(this.usuario);
  }
  inputApellidos(apellidos: any) {
    this.usuario.apellidos = apellidos.value;
    this.datosModificar.emit(this.usuario);
  }
  inputEmail(email: any) {
    this.usuario.email = email.value;
    this.datosModificar.emit(this.usuario);
  }
  inputTelefono(telefono: any) {
    this.usuario.telefono = telefono.value;
    this.datosModificar.emit(this.usuario);
  }
  inputDireccion(direccion: any) {
    this.usuario.direccion = direccion.value;
    this.datosModificar.emit(this.usuario);
  }
  inputCodigoPostal(codigo_postal: any) {
    this.usuario.codigo_postal = codigo_postal.value;
    this.datosModificar.emit(this.usuario);
  }
  inputPoblacion(poblacion: any) {
    this.usuario.poblacion = poblacion.value;
    this.datosModificar.emit(this.usuario);
  }
  inputProvincia(provincia: any){
    this.usuario.provincia = provincia.value;
    this.datosModificar.emit(this.usuario);
  }
  inputProfesion(profesion: any) {
    this.usuario.profesion = profesion.value;
    this.datosModificar.emit(this.usuario);
  }
  inputNotas(notas: any) {
    this.usuario.notas = notas.value;
    this.datosModificar.emit(this.usuario);
  }



}
