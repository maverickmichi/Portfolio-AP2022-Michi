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
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String titulo;
    String institucion;
    Number anio_inicio;
    Number anio_egreso;
    
   
    public Educacion(Long id, String titulo, String institucion, Number anio_inicio, Number anio_egreso) {
       this.id = id;
       this.titulo = titulo;
       this.institucion = institucion;
       this.anio_inicio = anio_inicio;
       this.anio_egreso = anio_egreso;
        
    }
    
    public Educacion() {
        
    }

}