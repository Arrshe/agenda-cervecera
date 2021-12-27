import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Contacto from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contactos: Contacto[]
  contactos$: Subject<Contacto[]>

  constructor() {
    this.contactos = [];
    this.contactos$ = new Subject();
  }

  agregarContacto(cContacto:Contacto){
    this.contactos.push(cContacto);
    this.contactos$.next(this.contactos);
    console.log(this.contactos)
  }

  getContactos$():Observable<Contacto[]>{
    return this.contactos$.asObservable();
  }

}
