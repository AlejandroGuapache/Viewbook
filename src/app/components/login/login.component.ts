import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import {  Router } from '@angular/router';
import swal from 'sweetalert';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService, FormBuilder]

})
export class LoginComponent implements OnInit {

  public user: Usuario;
  public dniForm: String;

  public form: FormGroup = this.fb.group({
    dni: ['', Validators.required]
  })


  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private fb: FormBuilder

  ) {
    this.dniForm = '';
    this.user = new Usuario(null, false, '','', '', '', '', '', '', '', null, '', []);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.dniForm = this.form.get('dni').value;
      this._usuarioService.getCliente(this.dniForm).subscribe(
        res => {
          this.user = res;
          console.log(this.user);
          localStorage.setItem('usuario', JSON.stringify(this.user));
          this._router.navigate(['/libros']).then(() => {
            window.location.reload();
          });
        },
        err=>{
          console.log(err);
        }
      )
    } 
     else {
       this.validateAllFormFields(this.form)
       console.log("error")
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
