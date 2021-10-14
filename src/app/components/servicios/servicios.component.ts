import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';
import { NosotrosService } from '../../services/nosotros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  articuloDestacados:Blog[] = []; 
  constructor( private _blogService: BlogService,
                private _nosotrosService: NosotrosService,
                private router: Router ) { }

  ngOnInit(): void {
    this.articuloDestacados = this._blogService.getAll();
    this.articuloDestacados.length = 6;    
  }
  
  getAutor( idAutor: number ){
    return this._nosotrosService.getNombreAutor( idAutor );
  }

  verArticulo( idArticulo ){
    this.router.navigate([ 'blog/articulo/', idArticulo ]);
  }
}
