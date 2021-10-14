import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private articulos: Blog[] = [
    {
      idArticulo: 101,
      idAutor: 7793,
      titulo: 'Cómo conseguir con éxito financiación para tu startup si eres mujer emprendedora',
      desc: 'Si bien las mujeres representan más de la mitad de la población de la UE y crean aproximadamente un 30% de las empresas, las mujeres emprendedoras tienen muchas más dificultades que los hombres para obtener financiación para nuestras empresas.',
      categoria: 'emprendimiento',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 102,
      idAutor: 7793,
      titulo: 'Suspenso de las empresas españolas en la gestión de datos (Madurez Data Driven)',
      desc: 'Según el 1er estudio en España del “Índice de madurez data driven de las empresas” las organizaciones suspenden en la gestión basada en datos con un 4,8. A pesar de que el COVID-19 ha incrementado el uso de los datos en el 74% de las empresas, solo el 15 % pueden considerarse Data Driven, y tan solo el 6% aplican modelos avanzados.',
      categoria: 'transformación digital',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 103,
      idAutor: 7793,
      titulo: 'Como liderar con éxito equipos de forma remota y presencial',
      desc: 'Los cambios vividos en este último año han forzado nuevos modelos de trabajo con formatos más híbridos y en remoto que van a marcar una nueva realidad. Los datos este año 2021 del 6º Estudio en España de Transformación Digital en RRHH elaborado por INCIPY han sido muy contundentes.',
      categoria: 'liderazgo',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 104,
      idAutor: 2617,
      titulo: '¿Cómo saber si tienes una buena idea para crear tu startup?',
      desc: 'En momentos de crisis económica es cuando surgen las mejores oportunidades para crear nuevos negocios. Por eso ahora es un buen momento para fundar una startup si tienes una buena idea.',
      categoria: 'emprendimiento',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 105,
      idAutor: 2617,
      titulo: '¿Cómo medir la Madurez Data Driven de tu empresa?',
      desc: 'Muchas organizaciones indican que saben gestionar en base a datos, que son Data Driven, pero pocas saben lo que realmente significa este concepto. Una organización Data Driven sabe identificar los insights que necesita para informar, gestiona de manera efectiva esos datos y empodera a sus equipos para usarlos. Realizar una evaluación de la madurez Data Driven para impulsar mejoras de capacidad en los requisitos de conocimiento, gestión de datos y comptencias del equipo debe ser el primer paso.',
      categoria: 'innovación',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 106,
      idAutor: 2617,
      titulo: '20 oportunidades que tenemos las empresas en esta grave crisis del Covid19',
      desc: 'Toda crisis presenta oportunidades y nos deja lecciones. Y esta grave crisis sanitaria y económica que estamos viviendo no es una excepción. Os dejo cuáles son para mí los 20 aspectos positivos y oportunidades que ha traído la pandemia a nuestras empresas y negocios.',
      categoria: 'liderazgo',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 107,
      idAutor: 1293,
      titulo: '5 Claves para transformar tu empresa en una organización Data Driven',
      desc: 'Internet, la inteligencia artificial-AI y las nuevas tecnologías seguirán siendo un motor de transformación, de oportunidades y crecimiento para el 2021. Pero, en plena cuarta revolución industrial, que integra campos como la inteligencia artificial, la robótica, la nanotecnología, la genética, la biotecnología, etc., junto al gran impacto Covid-19, aparecen también retos y riesgos que muchas compañías deben solventar día a día.',
      categoria: 'emprendimiento',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 108,
      idAutor: 1293,
      titulo: '21 tendencias de Transformación Digital 2021',
      desc: 'A punto de iniciarse el tan esperado 2021, o el año 1 como algunas empresas han indicado, he intentado reflexionar y sintetizar la información de estudios así como de nuestra propia experiencia en INCIPY, Digital Disruption Partner sobre algunas certezas que se van a producir a lo largo del mismo.',
      categoria: 'innovación',
      fecha: '12/08/2021'
    },
    {
      idArticulo: 109,
      idAutor: 1293,
      titulo: 'Seis tendencias de la transformación digital en una nueva realidad',
      desc: 'Ante un momento actual de grandes cambios e incertidumbre es importante vislumbrar algunas certezas e identificar las oportunidades que nos permita liderar nuestros negocios e impulsar, en la medida de lo posible, la economía de nuestro país en esta nueva realidad.',
      categoria: 'innovación',
      fecha: '12/08/2021'
    }
  ];

  constructor() { }

  getAll(): Blog[] {
    return this.articulos;
  }

  porUsuario( idUsuario: number ) {    
    return this.articulos.filter( articulo => articulo.idAutor == idUsuario );
  }
  getArticulo( idArticulo: number ){
    return this.articulos.find( articulo => articulo.idArticulo == idArticulo );
  }

}
