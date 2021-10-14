import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  personas: Persona[] = [];
  all:boolean = true;
  inactive:boolean = false;
  active:boolean = false;
  constructor( private _personasServices: PersonasService,
              private router: Router ) { }

  ngOnInit(): void {
    this.todos();
  }

  verEmpleado( idEmpleado ){
    this.router.navigate([ 'empleado', idEmpleado ]);
  }

  todos(){
    this._personasServices.getAll().then( resp =>{
      this.personas = resp;
      this.all = true;
      this.inactive = false;
      this.active = false;
    });
  }
  activos(){
    this._personasServices.activos().then( resp =>{
      this.personas = resp;
      this.all = false;
      this.inactive = false;
      this.active = true;
    });
  }
  inactivos(){
    this._personasServices.inactivos().then( resp =>{
      this.personas = resp;
      this.all = false;
      this.inactive = true;
      this.active = false;
    });
  }
  
}
