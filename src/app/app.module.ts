import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { BannerComponent } from './shared/banner/banner.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TrabajosComponent } from './components/nosotros/trabajos/trabajos.component';
import { CursosComponent } from './components/nosotros/cursos/cursos.component';
import { PostsComponent } from './components/nosotros/posts/posts.component';
import { TargetaArticuloComponent } from './shared/targeta-articulo/targeta-articulo.component';
import { ArticuloCompletoComponent } from './components/articulo-completo/articulo-completo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ServiciosComponent,
    BlogComponent,
    GaleriaComponent,
    PersonaDetalleComponent,
    BannerComponent,
    NosotrosComponent,
    TrabajosComponent,
    CursosComponent,
    PostsComponent,
    TargetaArticuloComponent,
    ArticuloCompletoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
