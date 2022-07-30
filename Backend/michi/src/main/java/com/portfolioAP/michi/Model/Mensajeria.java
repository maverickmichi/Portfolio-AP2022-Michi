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
public class Mensajeria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String tag;
    
   
    public Mensajeria(Long id, String tag) {
       this.id = id;
       this.tag = tag;
        
    }
    
    public Mensajeria() {
        
    }

}
