import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  @Input() titulo: string = '';
  @Input() desc: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
