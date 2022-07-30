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
public class Skills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_skills;
    @Basic
    String habilidad;
    String nivel;
    
   
    public Skills(Long id_skills, String habilidad, String nivel) {
       this.id_skills = id_skills;
       this.habilidad = habilidad;
       this.nivel = nivel; 
    }
    
    public Skills() {
        
    }

}
