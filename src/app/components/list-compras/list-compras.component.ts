import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { LibroService } from 'src/app/services/libro.services';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-compras',
  templateUrl: './list-compras.component.html',
  styleUrls: ['./list-compras.component.css'],
  providers: [LibroService, UsuarioService]
})
export class ListComprasComponent implements OnInit {

  public libro: Libro;
  public usuarios: Usuario[];

  
  constructor(
    private _route: ActivatedRoute,
    private _libroService: LibroService,
    
  ) { 
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let isbn = params['isbn'];

        this._libroService.getLibro(isbn).subscribe(
          res => {
            this.libro = res;
            this.usuarios = this.libro.usuarios;
          },
          err => {
            console.log(err);
          }
        )
      }
    )
  }

}
