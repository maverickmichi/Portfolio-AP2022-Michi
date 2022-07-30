export class Domicilio{
    id:number;
    calle:string;
    numero:number;
    piso:string;
    departamento:string;
    

    constructor(id:number, calle:string, numero:number, piso:string, departamento:string)
    
    {
        this.id=id;
        this.calle=calle;
        this.numero=numero;
        this.piso=piso;
        this.departamento=departamento;
           
        
    }
}