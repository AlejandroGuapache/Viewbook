//Importar los modulos de Routing de angular

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes a los cuales les quiero hacer una pagina exclusiva

import {ContenidoIndexComponent} from  './components/contenido-index/contenido-index.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import { LibrosComponent } from './components/libros/libros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CrearlibroComponent } from './components/crearlibro/crearlibro.component';
import {UpdatelibroComponent} from './components/updatelibro/updatelibro.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';
import { LibroComponent } from './components/libro/libro.component';
import { MisLibrosComponent } from './components/mis-libros/mis-libros.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListCategoriasComponent } from './components/list-categorias/list-categorias.component';
import { ListAutoresComponent } from './components/list-autores/list-autores.component';

// Definimos array de rutas
const appRoutes: Routes = [
    {path: '', component: ContenidoIndexComponent },
    {path: 'home', component: ContenidoIndexComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'libros', component: LibrosComponent},
    {path: 'libro/modificarlibro/:isbn', component: UpdatelibroComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'crearlibro', component: CrearlibroComponent},
    {path: 'update-usuario/:id', component: UpdateUsuarioComponent},
    {path: 'libro/:isbn', component: LibroComponent},
    {path: 'mis-libros/:id', component: MisLibrosComponent},
    {path: 'list-compras/:isbn', component: ListComprasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'categorias', component: ListCategoriasComponent},
    {path: 'autores', component: ListAutoresComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders <any> = RouterModule.forRoot(appRoutes);