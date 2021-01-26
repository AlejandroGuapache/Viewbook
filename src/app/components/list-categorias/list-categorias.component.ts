import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit {

  public categoria = "Terror";


  constructor(    
    ) { }

  ngOnInit(): void {
  }

  cambiarGenero(value){
    this.categoria = value;
  }

}
