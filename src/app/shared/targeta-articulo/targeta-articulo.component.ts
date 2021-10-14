import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog.model';
import { Nosotros } from '../../models/nosotros.models';
import { NosotrosService } from '../../services/nosotros.service';

@Component({
  selector: 'app-targeta-articulo',
  templateUrl: './targeta-articulo.component.html',
  styleUrls: ['./targeta-articulo.component.css']
})
export class TargetaArticuloComponent implements OnInit {
  @Input() articulos: Blog[] = [];
  constructor( private _nosotrosService: NosotrosService,
                private router: Router ) { }

  ngOnInit(): void {    
  }

  getAutor( idAutor: number ): Nosotros{
    return this._nosotrosService.getNombreAutor( idAutor );
  }

  verArticulo( idArticulo:number ){
    this.router.navigate([ 'blog/articulo', idArticulo ]);
  }

}
