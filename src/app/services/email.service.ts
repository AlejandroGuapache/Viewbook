import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global'

@Injectable()
export class EmailService {
    public url: string;

    constructor (
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    sendEmail(email):Observable <any> {
        let params = JSON.stringify(email);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        
        return this._http.post(this.url + 'email', params, {headers: headers});
    }

}