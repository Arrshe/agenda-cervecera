import Cerveza from './Cerveza';

export default interface Contacto {
    nombreContacto:string;
    telefono:string;
    fechaNacimiento:string;
    sexo:string;
    cervezasFavoritas:Array<Cerveza>
}