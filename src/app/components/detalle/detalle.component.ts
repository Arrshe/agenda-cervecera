import { Component, Input, OnInit } from '@angular/core';
import Contacto from 'src/app/model/Contacto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input()
  contacto?: Contacto;

  constructor() { }

  ngOnInit(): void {
  }

}
