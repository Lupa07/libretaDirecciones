import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libretaDirecciones-Joaquin';

  usuarios :any[]=[
    {
      "nombre" : "Horse Luis",
      "apellidos" : "Lopez",
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
      "nombre" : "Antonio",
      "apellidos" : "Lopez",
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
      "nombre" : "Alfonso",
      "apellidos" : "De Rojas",
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
      "nombre" : "Joaquin",
      "apellidos" : "Garcia",
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
      "nombre" : "Miguel",
      "apellidos" : "Moreno",
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
      "nombre" : "Rodrigo",
      "apellidos" : "Marquez",
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
  usuarioSeleccionado :any;
  
  

  
  seleccionaUsuario(usuario:any){
    this.usuarioSeleccionado = usuario;
    
  }

  

  
}
