import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { Usuario } from '../../models/usuario';
import { LibroService } from 'src/app/services/libro.services';
import { UsuarioService } from '../../services/usuario.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
  providers: [LibroService, UsuarioService]
})
export class LibroComponent implements OnInit {

  public libro: Libro;
  public user: Usuario;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _libroService: LibroService,
    private _usuarioService: UsuarioService
  ) {

    this.libro = new Libro(null, '', '', null, '','',[]);
  }

  ngOnInit(): void {
     this.getLibro();
     this.user = JSON.parse(localStorage.getItem('usuario'));

  }

  getLibro (){
    this._route.params.subscribe(
      params => {
        let isbn = params['isbn'];

        this._libroService.getLibro(isbn).subscribe(
          res => {
            this.libro = res;
          },
          err => {
            console.log(err);
          }
        )
      }
    )
  }

  addLibro(libro) {
    this._usuarioService.addLibro(this.user.id, libro).subscribe(
      res => {
        if (res) {
          this.user.libros.push(res);
        }
        swal({
          title: "Comprado!",
          text: "Has comprado este libro",
          icon: "success",
          buttons: ["¡A leer!"]
        });
      },
      err => {
        console.log(err);
        console.log(libro);
      }
    )
  }
}
