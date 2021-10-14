import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {
  
  persona: Persona = new Persona();

  constructor( private activateRouter: ActivatedRoute,
              private _personaSevice: PersonasService ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params =>{
        this.detallePersona( params.id );
      });
  }
  
  detallePersona( idPersona:number ){
    this.persona = this._personaSevice.getDetallePersona( idPersona );
  }

  activar(){
    this.persona.activo = !this.persona.activo;
  }

}
