import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContenidoIndexComponent } from './components/contenido-index/contenido-index.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LibrosComponent } from './components/libros/libros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CrearlibroComponent } from './components/crearlibro/crearlibro.component';
import { UpdatelibroComponent } from './components/updatelibro/updatelibro.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';
import { LibroComponent } from './components/libro/libro.component';
import { MisLibrosComponent } from './components/mis-libros/mis-libros.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListCategoriasComponent } from './components/list-categorias/list-categorias.component';
import { ListAutoresComponent } from './components/list-autores/list-autores.component';
import { AutoresComponent } from './components/autores/autores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ContenidoIndexComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    LibrosComponent,
    UsuariosComponent,
    CrearlibroComponent,
    UpdatelibroComponent,
    UpdateUsuarioComponent,
    LibroComponent,
    MisLibrosComponent,
    ListComprasComponent,
    ContactoComponent,
    CategoriaComponent,
    ListCategoriasComponent,
    ListAutoresComponent,
    AutoresComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
