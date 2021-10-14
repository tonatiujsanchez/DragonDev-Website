import { Component, OnInit } from '@angular/core';
import { NosotrosService } from '../../services/nosotros.service';
import { Nosotros } from '../../models/nosotros.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  nosotros: Nosotros[] = [];
  idPersona: number = 0;

  constructor( public _nosotros: NosotrosService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {
    this._nosotros.getAll().then( resp=>{
      this.nosotros = resp;
    });
  }

  navegar(ruta, personaId?:number){
    if( personaId ){
      this._nosotros.idUsuarioSelecionado = personaId;
    }
    
    this._nosotros.detallesActivado =  true;
    this.router.navigate([ruta, this._nosotros.idUsuarioSelecionado], { relativeTo: this.activatedRoute });
  }
}
