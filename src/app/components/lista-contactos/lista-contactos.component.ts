import { Component, OnInit } from '@angular/core';
import Contacto from 'src/app/model/Contacto';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  contactos:Contacto[];
  selectedContacto!: Contacto;

  constructor(private contactosService:ContactosService) { 
    this.contactos=this.contactosService.contactos;
  }

  ngOnInit(): void {
  }

  onSelect(contacto:Contacto):void{
    this.selectedContacto=contacto;
  }
}
