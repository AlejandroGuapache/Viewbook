import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from '../../models/Email';
import { EmailService } from '../../services/email.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [FormBuilder, EmailService]

})
export class ContactoComponent implements OnInit {

  public email = Email;

  public form: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    asunto: ['', Validators.required],
    correo: ['', [Validators.email, Validators.required]],
    texto: ['', Validators.required]
  })


  constructor(
    private _emailService: EmailService,
    private _router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(values) {
    if (this.form.valid) {
      this.email = values;
      this._emailService.sendEmail(this.email).subscribe(
        res => {
          swal({
            title: "Enviado!",
            text: "Has comprado este libro",
            icon: "success"
          });
        },
        err => {
          console.log(err);
        }
      )
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
