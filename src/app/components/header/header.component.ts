import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: Usuario;

  constructor(
    private _router: Router,
  ) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('usuario');
    this._router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  recargar(){
    console.log("Hola");
    window.location.reload();
  }
}
