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
public class RedSocial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String url;
    String repositorio;
    
   
    public RedSocial(Long id, String url, String repositorio) {
       this.id = id;
       this.url = url;
       this.repositorio = repositorio; 
    }
    
    public RedSocial() {
        
    }

}
