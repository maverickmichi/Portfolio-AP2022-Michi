export class Experiencia{
    id:number;
    posicion:string;
    lugar:string;
    anio_inicio:number;
    anio_egreso:number;
    

    constructor(id:number, posicion:string, lugar:string, anio_inicio:number, anio_egreso:number)
    
    {
        this.id=id;
        this.posicion=posicion;
        this.lugar=lugar;
        this.anio_inicio=anio_inicio;
        this.anio_egreso=anio_egreso;
          
        
    }
}