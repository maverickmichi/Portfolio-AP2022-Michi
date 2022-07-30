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
public class Domicilio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String calle;
    String numero;
    String piso;
    String departamento;
    
    public Domicilio(Long id, String calle, String numero, String piso, String departamento) {
       this.id = id;
       this.calle = calle;
       this.numero = numero;
       this.piso = piso;
       this.departamento = departamento;
        
    }
    
    public Domicilio() {
        
    }

}