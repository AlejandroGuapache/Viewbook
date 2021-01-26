import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.services';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.component.html',
  styleUrls: ['./mis-libros.component.css'],
  providers: [LibroService, UsuarioService]
})
export class MisLibrosComponent implements OnInit {

  public libros: Libro[];
  public user: Usuario;


  constructor(
    private _libroService: LibroService,
    private _usuarioService: UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
   this.getUsuario();
  }


  getUsuario() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];

        this._usuarioService.getClienteById(id).subscribe(
          res => {
            this.libros = res.libros;
            this.user = res;
          },
          err => {
            console.log(err);
          }
        )
      }
    )
  }

  deleteBookToUser (idLibro, idUsuario) {
    var deleteIdBook = idLibro;
    var deleteIdUser= idUsuario;
    this._usuarioService.deleteBookToUser(idUsuario, idLibro).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    )
    this.deleteUsuarioToBook(deleteIdBook, deleteIdUser);
  }

  deleteUsuarioToBook ( idLibro, idUsuario) {
    console.log("entra")
    this._libroService.deleteUserToLibro(idLibro, idUsuario).subscribe(
      res => {
        console.log("OK deleteUsuarioToBook")
      },
      err => {
        console.log(err);
      }
    )
  }
}