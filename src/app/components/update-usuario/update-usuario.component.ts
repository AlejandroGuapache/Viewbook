import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css'],
  providers: [UsuarioService, FormBuilder]
})
export class UpdateUsuarioComponent implements OnInit {

  public usuarioUpdate: Usuario;

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
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder

  ) {
    this.usuarioUpdate = new Usuario(0, false, '', '', '', '', '', '', '', '', null, '', []);
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];

        this._usuarioService.getClienteById(id).subscribe(
          res => {
            this.usuarioUpdate = res;
            this.form.patchValue(this.usuarioUpdate);

          },
          err => {
            console.log(err);
          }
        )
      }
    )
  }


  onSubmit(values) {
    if (this.form.valid) {
      this.usuarioUpdate = values;
      this._usuarioService.update(this.usuarioUpdate, this.usuarioUpdate.dni).subscribe(
        res => {
          this.usuarioUpdate = res;
          swal({
            title: "Enviado!",
            text: "Has comprado este libro",
            icon: "success"
          });
          this._router.navigate(['/login']);
        }
      ),
        err => {
          console.log(err);
          console.log(this.usuarioUpdate);
        }
    }else{
      this.validateAllFormFields(this.form)

      swal({
        title: "Error!",
        text: "Faltan campos que rellenar",
        icon: "error",
      });
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
