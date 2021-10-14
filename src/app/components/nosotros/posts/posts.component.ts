import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../../models/blog.model';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  articulos: Blog[] = [];
  constructor( private activatedRoute: ActivatedRoute,
               private _blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ( params )=>{
        this.getArticulos( params.id );
      }
    );
  }

  getArticulos( idUsuario ){
    this.articulos = this._blogService.porUsuario( idUsuario );    
  }

}
