import { Component, OnInit } from '@angular/core';
import {LibroService} from '../../services/libro.services'


@Component({
  selector: 'app-list-autores',
  templateUrl: './list-autores.component.html',
  styleUrls: ['./list-autores.component.css'],
  providers: [LibroService]
})
export class ListAutoresComponent implements OnInit {
  public autores = [];
  public autor = "King";

  constructor(
    private _libroService : LibroService
  ) { }

  ngOnInit(): void {
    this.getAutores();
  }

  getAutores(){
    this._libroService.getAutores().subscribe(
      res => {
        this.autores = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  
  cambiarAutor(value){
    this.autor = value;
  }

}
