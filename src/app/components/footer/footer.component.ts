import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public user: Usuario;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario'));

  }

}
