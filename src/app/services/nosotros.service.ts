import { Injectable } from '@angular/core';
import { Nosotros } from '../models/nosotros.models';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  
  public idUsuarioSelecionado = 7793;
  public detallesActivado: boolean = false;
  private nosotros:Nosotros[] = [
    {
      id: 7793,
      nombre: 'Tonatiuj Sánchez',
      edad: 28,
      cargo: 'Web Developer',
      activo: true,
      desc: 'Intenta hacer pequeños logros todos los días. Si lo haces así, Imagínate lo que lograrás en un mes... Un año... Una vida...'
    },
    {
      id: 2617,
      nombre: 'B. Santiago ',
      edad: 27,
      cargo: 'Systems analyst',
      activo: true,
      desc: 'Te digo que vacíes tu mente. Libérate de la forma, como el agua. Ahora si pones agua en una taza, se convertirá en la taza.'
    },
    {
      id: 1293,
      nombre: 'Nath Cardoso',
      edad: 27,
      cargo: 'Designer',
      activo: true,
      desc: 'No cedas; no bajes el tono, no trates de hacerlo lógico, no edites tu alma de acuerdo a la moda. Mejor, sigue sin piedad tus obsesiones más intensas.'
    }
  ];

  constructor() { }

  getAll(){
     return new Promise<Nosotros[]>( ( resolve, reject ) =>{
      resolve( this.nosotros );
    });
  }

  getNombreAutor( idAutor ){
    return this.nosotros.find( autor => autor.id == idAutor );
  }
}
