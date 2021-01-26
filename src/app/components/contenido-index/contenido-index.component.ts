import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { Libro } from '../../models/libro';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario'
import swal from 'sweetalert'

@Component({
  selector: 'app-contenido-index',
  templateUrl: './contenido-index.component.html',
  styleUrls: ['./contenido-index.component.css'],
  providers: [LibroService, UsuarioService]
})
export class ContenidoIndexComponent implements OnInit {
  public user: Usuario;

  constructor(private _libroService: LibroService,
    private _usuarioService: UsuarioService
  ) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  public libros: Libro[];

  ngOnInit(): void {
    this.getLibros();
  }

  addLibro(libro) {
    this._usuarioService.addLibro(this.user.id, libro).subscribe(
      res => {
        console.log(this.user.libros);
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

  getLibros(){
    this._libroService.getLibros().subscribe(
      res => {
        if (res) {
          this.libros = res;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
