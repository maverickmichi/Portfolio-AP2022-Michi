export interface Educacion{
    id:number;
    titulo:string;
    institucion:string;
    anio_inicio:number;
    anio_egreso:number;
    

    constructor(id:number, nombre:string, apellido:string, avatar:string, descripcion:string, posicion:string)
    
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.avatar=avatar;
        this.descripcion=descripcion;
        this.posicion=posicion;
    
        
    }
}