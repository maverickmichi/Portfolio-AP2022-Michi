export interface Skills{
    id: number;
    habilidad: string;
    nivel: string;
    
   

    constructor(soft: string, hard: string, idiomas: string)
    {
        this.soft=soft;
        this.hard=hard;
        this.idiomas=idiomas;
        
    }

}