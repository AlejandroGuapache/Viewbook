import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { Libro } from '../../models/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-updatelibro',
  templateUrl: './updatelibro.component.html',
  styleUrls: ['./updatelibro.component.css'],
  providers: [LibroService, FormBuilder]
})
export class UpdatelibroComponent implements OnInit {

  public libroEdit: Libro;
  public form: FormGroup = this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    categoria: ['', Validators.required],
    isbn: [0, Validators.required],
  })

  constructor(
    private _libroService: LibroService,
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder


  ) {
    this.libroEdit = new Libro(null, '', '', null, '', '', []);

  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    this._route.params.subscribe(
      params => {
        let isbn = params['isbn'];

        this._libroService.getLibro(isbn).subscribe(
          res => {
            this.libroEdit = res
            this.form.patchValue(this.libroEdit);

          },
          err => {
            console.log(err);
          }
        )
      });
  }

  onSubmit(values) {
    if (this.form.valid) {
      this.libroEdit = values;
      this._route.params.subscribe(
        params => {
          let isbn = params['isbn'];
          this._libroService.update(this.libroEdit, isbn).subscribe(
            res => {
              swal({
                title: "Actualizado!",
                text: "Has actualizado este libro",
                icon: "success"
              })
              this.libroEdit = res;
              this._router.navigate(['/libros']);

            },
            err => {
              console.log(err);
              console.log(this.libroEdit);
            }
          )
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
