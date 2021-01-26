import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsuarioService, FormBuilder]
})
export class SignupComponent implements OnInit {

  public usuarioNuevo: Usuario;
  public form: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido1: ['', Validators.required],
    apellido2: ['', Validators.required],
    dni: ['', Validators.required],
    direccion: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    poblacion: ['', Validators.required],
    provincia: ['', Validators.required],
    edad: [0, Validators.required],
    sexo: ['', Validators.required],
  })

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private fb: FormBuilder

  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(values) {
    if (this.form.valid) {
      this.usuarioNuevo = values;
      this._usuarioService.create(this.usuarioNuevo).subscribe(
        res => {
          this.usuarioNuevo = res;
          this._router.navigate(['/home']);
        },
        err => {
          console.log(err);

        }
      )
    }
  }
}
