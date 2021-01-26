import {Usuario} from '../models/usuario';
export class Libro {
    constructor (
        public isbn: number,
        public categoria: string,
        public titulo: string,
        public id: number,
        public autor: string,
        public sinopsis: string,
        public usuarios: Usuario []
    ){
    }
}