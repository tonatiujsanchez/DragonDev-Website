import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Nosotros } from '../../models/nosotros.models';
import { NosotrosService } from '../../services/nosotros.service';

@Component({
  selector: 'app-articulo-completo',
  templateUrl: './articulo-completo.component.html',
  styleUrls: ['./articulo-completo.component.css']
})
export class ArticuloCompletoComponent implements OnInit {
  
  articulo:any = {}

  constructor( private activateRouter: ActivatedRoute,
                private _blogService: BlogService,
                private _nosotrosService: NosotrosService  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      (params)=>{
        this.getArticulo( params.idArticulo );
      }
    );
  }
  getArticulo( idArticulo ){
    this.articulo = this._blogService.getArticulo( idArticulo );
  }

  getAutor( idAutor: number ): Nosotros {
    return this._nosotrosService.getNombreAutor( idAutor );
  }

}
