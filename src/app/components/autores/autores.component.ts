import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.services';
import { UsuarioService } from '../../services/usuario.service';
import { Libro } from 'src/app/models/libro';
import { Usuario } from '../../models/usuario'
import swal from 'sweetalert'

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
  providers: [LibroService, UsuarioService]
})
export class AutoresComponent implements OnChanges {
  @Input() autor: string;

  public libros: Libro[];
  public user: Usuario;
  public UserToBook: Usuario

  constructor(
    private _route: ActivatedRoute,
    private _libroService: LibroService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario'));
    this.getLibroByAutor();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.autor.currentValue != changes.autor.previousValue) {
      this.getLibroByAutor();
    }
  }

  getLibroByAutor(){
    this._libroService.getLibroByAutor(this.autor).subscribe(
      res =>{
        this.libros = res;
      },
      err => {
        console.log(err);
      }
    )

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

  addUserToBook(libro) {
    this.UserToBook = this.user;
    delete this.UserToBook.libros
    console.log(this.UserToBook)
    this._libroService.addUserToBook(libro.isbn, this.user).subscribe(
      res => {
        console.log("OK");
      },
      err => {
        console.log(err);
      }
    )
  }

}
