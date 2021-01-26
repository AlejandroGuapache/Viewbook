import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global'

@Injectable()
export class LibroService {
    public url: string;

    constructor (
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    // Obtiene todos los libros

    getLibros ():Observable<any>{
        return this._http.get(this.url + 'libros');
    }

    // Crea un libro en la base de datos

    create(libro):Observable <any>{
        let params = JSON.stringify(libro);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url + 'libro', params, {headers: headers});
    }

    delete (isbn):Observable <any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.delete(this.url+'libro/' +isbn, {headers:headers})
    }

    getLibro(isbn):Observable <any>{
        return this._http.get(this.url+'libro/' + isbn);
    }

    update (libroEdit, libroISBN):Observable <any>{
        let params = JSON.stringify(libroEdit);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.put(this.url + 'libro/' + libroISBN , params, {headers: headers});
    }

    addUserToBook (isbn, usuario): Observable <any> {
        let params = JSON.stringify(usuario);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+ 'libro/addUser/' + isbn, params, {headers: headers});
    }

    getLibrosToCategoria (categoria):Observable<any>{
        return this._http.get(this.url+ 'libros/' + categoria);
    }

    getAutores ():Observable<any>{
        return this._http.get(this.url + 'libros/autores');
    }

    getLibroByAutor (autor):Observable<any>{
        return this._http.get(this.url + 'libros/autor/' + autor);
    }

    deleteUserToLibro (idLibro, idUsuario):Observable<any>{
        return this._http.delete(this.url + 'libro/devolver/' + idLibro + '/' + idUsuario);
    }
}