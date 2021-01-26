import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { UsuarioService } from '../../services/usuario.service';
import { Libro } from '../../models/libro';
import { Usuario } from '../../models/usuario'
import swal from 'sweetalert'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
  providers: [LibroService, UsuarioService]
})
export class LibrosComponent implements OnInit {


  public libros: Libro[];
  public user: Usuario;
  public UserToBook: Usuario

  constructor(
    private _libroService: LibroService,
    private _usuarioService: UsuarioService
  ) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit(): void {
    this._libroService.getLibros().subscribe(
      res => {
        this.libros = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(isbn) {
    swal({
      title: "¿Estas seguro?",
      text: "Una vez borrado el libro, no podras recuperarlo.",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this._libroService.delete(isbn).subscribe(
            res => {
              if (res) {
                this.ngOnInit();
              }
            },
            err => {
              console.log(err);
            }
          )
          swal("Se ha eliminado correctamente el libro", {
            icon: "success",
          });
        } else {
          swal("No se ha eliminado el libro");
        }
      });
  }

  addLibro(libro) {
    this._usuarioService.addLibro(this.user.id, libro).subscribe(
      res => {
        swal({
          title: "Comprado!",
          text: "Has comprado este libro",
          icon: "success",
          buttons: ["¡A leer!"]
        });

        this.addUserToBook(libro)
      },
      err => {
        console.log(err);
        console.log(libro);
      }
    )
  }

  addUserToBook (libro){
    this.UserToBook = this.user;
    delete this.UserToBook.libros
    this._libroService.addUserToBook(libro.isbn, this.user).subscribe(
      res => {
      },
      err => {
        console.log(err);
      }
    )
  }
}
