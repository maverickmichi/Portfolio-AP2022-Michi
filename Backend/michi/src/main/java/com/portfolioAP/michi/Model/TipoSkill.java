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
public class TipoSkill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String tipo_skill;
        
   
    public TipoSkill(Long id, String tipo_skill) {
       this.id = id;
       this.tipo_skill = tipo_skill;
    }
    
    public TipoSkill() {
        
    }

}
