import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libretaDirecciones-Joaquin';

  usuarios: any[] = [
    {
      "nombre": "Horse Luis",
      "apellidos": "Lopez",
      "email": "caballoLopez@gmail.com",
      "telefono": "666666666",
      "direccion": "c/Tesalonica,nº 8",
      "codigo_postal": "41007",
      "poblacion": "Sevilla",
      "provincia": "Sevilla",
      "profesion": "None",
      "notas": "Sobresaliente"
    },
    {
      "nombre": "Antonio",
      "apellidos": "Lopez",
      "email": "AntonioLopez@gmail.com",
      "telefono": "666666666",
      "direccion": "c/Tesalonica,nº 10",
      "codigo_postal": "41007",
      "poblacion": "Sevilla",
      "provincia": "Sevilla",
      "profesion": "None",
      "notas": "Notable"
    },
    {
      "nombre": "Alfonso",
      "apellidos": "De Rojas",
      "email": "FonsiDR@gmail.com",
      "telefono": "666666666",
      "direccion": "c/Tesalonica,nº 10",
      "codigo_postal": "41007",
      "poblacion": "Sevilla",
      "provincia": "Sevilla",
      "profesion": "None",
      "notas": "Notable"
    },
    {
      "nombre": "Joaquin",
      "apellidos": "Garcia",
      "email": "Joaquingarcia@gmail.com",
      "telefono": "666666666",
      "direccion": "c/Tesalonica,nº 10",
      "codigo_postal": "41860",
      "poblacion": "Gerena",
      "provincia": "Sevilla",
      "profesion": "None",
      "notas": "Notable"
    },
    {
      "nombre": "Miguel",
      "apellidos": "Moreno",
      "email": "MiguelMoreno@gmail.com",
      "telefono": "666666666",
      "direccion": "c/Tesalonica,nº 10",
      "codigo_postal": "41007",
      "poblacion": "Castilleja de la Cuesta",
      "provincia": "Sevilla",
      "profesion": "None",
      "notas": "Notable"
    },
    {
      "nombre": "Rodrigo",
      "apellidos": "Marquez",
      "email": "rodrigomarquez@gmail.com",
      "telefono": "666666666",
      "direccion": "c/Tesalonica,nº 10",
      "codigo_postal": "41007",
      "poblacion": "Sevilla",
      "provincia": "Sevilla",
      "profesion": "None",
      "notas": "Notable"
    }
  ]
  usuarioSeleccionado: any;
  datosUsuarioCambiar: any;
  posicion: any;

  seleccionaUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
    this.posicion = this.usuarios.indexOf(this.usuarioSeleccionado);
  }
  datosUsuarioModificar(usuario: any) {
    this.datosUsuarioCambiar = usuario;
  }

  accionDelBotton(cambio: any) {
    switch (cambio) {
      case 'crear': {
        this.crear();
        break;
      }
      case 'borrar': {
        this.eliminar();
        break;
      }
      case 'modificar': {
        this.modificar();
        break;
      }
    }
  }
  crear() {
    let nuevo_usuario = {
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
    }
    this.usuarios.push(nuevo_usuario);
  }
  eliminar() {
    this.usuarios.splice(this.usuarios.indexOf(this.usuarioSeleccionado), 1)
  }


  modificar() {
console.log("Usuario Seleccionado")
    console.log(this.usuarioSeleccionado);
   
    

  // this.usuarios[this.usuarios.indexOf(this.usuarioSeleccionado)] = this.datosUsuarioCambiar;
    let nuevo_usuario = {
      "nombre": this.datosUsuarioCambiar.nombre,
      "apellidos": this.datosUsuarioCambiar.apellidos,
      "email": this.datosUsuarioCambiar.email,
      "telefono": this.datosUsuarioCambiar.telefono,
      "direccion": this.datosUsuarioCambiar.direccion,
      "codigo_postal": this.datosUsuarioCambiar.codigo_postal,
      "poblacion": this.datosUsuarioCambiar.poblacion,
      "provincia": this.datosUsuarioCambiar.provincia,
      "profesion": this.datosUsuarioCambiar.profesion,
      "notas": this.datosUsuarioCambiar.notas
    }

    this.datosUsuarioCambiar=nuevo_usuario;
    //this.usuarios[this.posicion] = nuevo_usuario;

    console.log("Usuario con los datos cambiados")
    console.log(this.datosUsuarioCambiar)

  }


}
