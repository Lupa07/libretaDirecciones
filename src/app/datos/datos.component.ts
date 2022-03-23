import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  @Input () usuarioSeleccionadoPadre2:any;
  constructor() { }

  ngOnInit(): void {
  }

}
