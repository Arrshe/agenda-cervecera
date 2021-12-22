import Cerveza from './Cerveza';

export default interface Contacto {
    nombre:string;
    telefono:string;
    fechaNacimiento:string;
    sexo:string;
    cervezasFavoritas:Array<Cerveza>
}