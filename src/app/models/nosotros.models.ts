export class Nosotros{
    id: number;
    nombre: string;
    edad: number;
    cargo: string;
    activo: boolean;
    desc: string;

    constructor(id: number = 0, nombre: string ='Sin nombre', edad: number = 0, cargo: string = '', activo: boolean = true, desc:string = ''){ 
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.activo = activo;
        this.desc = desc;
    }
}