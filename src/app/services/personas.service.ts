import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  
  private personas: Persona[] = [
    {
      id: 100,
      nombre: 'Santi',
      edad: 26,
      cargo: 'Frontend Developer',
      activo: true
    },
    {
      id: 101,
      nombre: 'Brandon',
      edad: 27,
      cargo: 'Backend Developer',
      activo: true
    },
    {
      id: 102,
      nombre: 'Romina',
      edad: 27,
      cargo: 'Designer',
      activo: true
    },
    {
      id: 103,
      nombre: 'Stuart ',
      edad: 28,
      cargo: 'Full Stack Developer',
      activo: false
    },
    {
      id: 104,
      nombre: 'Emiliano',
      edad: 26,
      cargo: 'UI-UX',
      activo: true
    },
    {
      id: 105,
      nombre: 'Rodrigo',
      edad: 29,
      cargo: 'Copyright',
      activo: false
    },
    {
      id: 106,
      nombre: 'Alexa',
      edad: 27,
      cargo: 'Ilustrator',
      activo: false
    },
    {
      id: 107,
      nombre: 'Andrea',
      edad: 29,
      cargo: 'Animator',
      activo: false
    },
    {
      id: 108,
      nombre: 'Santi',
      edad: 26,
      cargo: 'Frontend Developer',
      activo: true
    },
    {
      id: 109,
      nombre: 'Brandon',
      edad: 27,
      cargo: 'Backend Developer',
      activo: true
    },
    {
      id: 110,
      nombre: 'Romina',
      edad: 27,
      cargo: 'Designer',
      activo: true
    },
    {
      id: 111,
      nombre: 'Stuart ',
      edad: 28,
      cargo: 'Full Stack Developer',
      activo: false
    },
    {
      id: 112,
      nombre: 'Emiliano',
      edad: 26,
      cargo: 'UI-UX',
      activo: true
    },
    {
      id: 113,
      nombre: 'Rodrigo',
      edad: 29,
      cargo: 'Copyright',
      activo: false
    },
    {
      id: 114,
      nombre: 'Alexa',
      edad: 27,
      cargo: 'Ilustrator',
      activo: false
    },
    {
      id: 115,
      nombre: 'Andrea',
      edad: 29,
      cargo: 'Animator',
      activo: false
    },
    {
      id: 116,
      nombre: 'Santi',
      edad: 26,
      cargo: 'Frontend Developer',
      activo: true
    },
    {
      id: 117,
      nombre: 'Brandon',
      edad: 27,
      cargo: 'Backend Developer',
      activo: true
    },
    {
      id: 118,
      nombre: 'Romina',
      edad: 27,
      cargo: 'Designer',
      activo: true
    },
    {
      id: 119,
      nombre: 'Stuart ',
      edad: 28,
      cargo: 'Full Stack Developer',
      activo: false
    },
    {
      id: 120,
      nombre: 'Emiliano',
      edad: 26,
      cargo: 'UI-UX',
      activo: true
    },
    {
      id: 121,
      nombre: 'Rodrigo',
      edad: 29,
      cargo: 'Copyright',
      activo: false
    },
    {
      id: 122,
      nombre: 'Alexa',
      edad: 27,
      cargo: 'Ilustrator',
      activo: false
    },
    {
      id: 123,
      nombre: 'Andrea',
      edad: 29,
      cargo: 'Animator',
      activo: false
    },
    {
      id: 124,
      nombre: 'Santi',
      edad: 26,
      cargo: 'Frontend Developer',
      activo: true
    },
    {
      id: 125,
      nombre: 'Brandon',
      edad: 27,
      cargo: 'Backend Developer',
      activo: true
    },
    {
      id: 126,
      nombre: 'Romina',
      edad: 27,
      cargo: 'Designer',
      activo: true
    },
    {
      id: 127,
      nombre: 'Stuart ',
      edad: 28,
      cargo: 'Full Stack Developer',
      activo: false
    },
    {
      id: 128,
      nombre: 'Emiliano',
      edad: 26,
      cargo: 'UI-UX',
      activo: true
    },
    {
      id: 129,
      nombre: 'Rodrigo',
      edad: 29,
      cargo: 'Copyright',
      activo: false
    },
    {
      id: 130,
      nombre: 'Alexa',
      edad: 27,
      cargo: 'Ilustrator',
      activo: false
    },
    {
      id: 131,
      nombre: 'Andrea',
      edad: 29,
      cargo: 'Animator',
      activo: false
    },
    {
      id: 132,
      nombre: 'Jack',
      edad: 29,
      cargo: 'Animator',
      activo: false
    }
  ];

  constructor() { }
  getDetallePersona( idPersona: number ):Persona {
    return this.personas.find( persona => persona.id == idPersona );  
  }

  getAll(){
    return new Promise<Persona[]>( (resolve, reject)=>{
      resolve( this.personas );
    });
  }

  activos() {
    return new Promise<Persona[]>( ( resolve, reject )=>{
      const arrTemp = this.personas.filter( persona => persona.activo === true );
      resolve( arrTemp );
    });
  }

  inactivos() {
    return new Promise<Persona[]>( ( resolve, reject )=>{
      const arrTemp = this.personas.filter( persona => persona.activo === false );
      resolve( arrTemp );
    });
  }




}
