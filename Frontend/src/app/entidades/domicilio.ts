export interface Domicilio{
    id:number;
    calle:string;
    numero:number;
    piso:string;
    departamento:string;
    

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