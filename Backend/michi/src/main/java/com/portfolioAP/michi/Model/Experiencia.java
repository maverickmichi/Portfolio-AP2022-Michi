package com.portfolioAP.michi.Model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String posicion;
    String lugar;
    Number anio_inicio;
    Number anio_egreso;
    
   
    public Experiencia(Long id, String posicion, String lugar, Number anio_inicio, Number anio_egreso) {
       this.id = id;
       this.posicion = posicion;
       this.lugar = lugar;
       this.anio_inicio = anio_inicio;
       this.anio_egreso = anio_egreso;
        
    }
    
    public Experiencia() {
        
    }

}
