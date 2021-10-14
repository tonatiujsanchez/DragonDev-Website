import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

import { TrabajosComponent } from './components/nosotros/trabajos/trabajos.component';
import { CursosComponent } from './components/nosotros/cursos/cursos.component';
import { PostsComponent } from './components/nosotros/posts/posts.component';
import { ArticuloCompletoComponent } from './components/articulo-completo/articulo-completo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'inicio', component: InicioComponent },
  { path: 'empleado/:id', component: PersonaDetalleComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'blog/articulo/:idArticulo', component: ArticuloCompletoComponent },
  { 
    path: 'nosotros', component: NosotrosComponent,
    children: [
      // { path: '', pathMatch: 'full', redirectTo: 'detalles/trabajos'},
      { path: 'detalles/trabajos/:id', component: TrabajosComponent },
      { path: 'detalles/cursos/:id', component: CursosComponent },
      { path: 'detalles/posts/:id', component: PostsComponent }
    ]    
  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
