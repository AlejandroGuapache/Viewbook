import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario'
import {UsuarioService} from '../../services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this._usuarioService.getClientes().subscribe(
      res => {
        this.usuarios = res;
        console.log("OK");
        console.log(this.usuarios);
      },
      err => {
        console.log(err);
      }
    )
  }

  delete (dni){
    this._usuarioService.delete(dni).subscribe(
      res => {
        if (res) {
          console.log('OK');
          this.ngOnInit();
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
