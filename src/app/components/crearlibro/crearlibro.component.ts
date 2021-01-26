import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crearlibro',
  templateUrl: './crearlibro.component.html',
  styleUrls: ['./crearlibro.component.css'],
  providers: [LibroService]
})
export class CrearlibroComponent implements OnInit {

  public libroNuevo: Libro;
  public status: string;

  constructor(
    private _libroService: LibroService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.libroNuevo = new Libro(null, '', '', 1, '','',[]);
  }

  ngOnInit(): void {

  }

  onSubmit() {

    this._libroService.create(this.libroNuevo).subscribe(
      res => {
        this._router.navigate(['/libros'])
      },
      err => {
        console.log(err);
        this.status = 'error'
        console.log(this.libroNuevo)
      }
    )
  }

}
