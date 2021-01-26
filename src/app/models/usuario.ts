import {Libro} from '../models/libro';

export class Usuario {
    constructor (
        public id: 0,
        public admin: boolean,
        public dni: string,
        public nombre: string,
        public apellido1: string,
        public apellido2: string,
        public direccion: string,
        public correo: string,
        public poblacion: string,
        public provincia: string,
        public edad: number,
        public sexo: string,
        public libros: Libro[]
    ){

    }
}