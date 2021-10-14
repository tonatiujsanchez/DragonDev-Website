import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  articulos: Blog[] = [];
  constructor( private _blogService: BlogService ) { }

  ngOnInit(): void {
    this.articulos = this._blogService.getAll();
  }

}
