import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global'

@Injectable()
export class UsuarioService{

    public url: string;

    constructor (
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    getClientes ():Observable <any> {
        return this._http.get(this.url + 'usuarios')
    }

    create(usuario):Observable <any> {
        let params = JSON.stringify(usuario);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url + 'usuario', params, {headers: headers});
    }

    getCliente (dni):Observable<any>{
        return this._http.get(this.url + 'usuario/' + dni);
    }

    getClienteById (id):Observable<any>{
        return this._http.get(this.url + 'user/' + id);
    }

    update(usuarioEdit, dni):Observable<any>{
        let params = JSON.stringify(usuarioEdit);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.put(this.url + 'usuario/' + dni, params, {headers: headers});
    }

    delete (dni):Observable<any>{
        return this._http.delete(this.url + 'usuario/' + dni);
    }

    addLibro(id, libro):Observable <any>{
        let params = JSON.stringify(libro);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.put(this.url+ 'usuario/addLibro/' + id, params, {headers: headers});
    }

    deleteBookToUser(idUsuario, idLibro):Observable<any>{
        return this._http.delete(this.url+ 'usuario/devolver/' + idUsuario + "/" + idLibro);

    }
}