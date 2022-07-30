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
public class Contacto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Basic
    String telefono;
    String tel_celular;
    String mail;
    
    public Contacto(Long id, String telefono, String tel_celular, String mail) {
       this.id = id;
       this.telefono = telefono;
       this.tel_celular = tel_celular;
       this.mail = mail;
        
    }
    
    public Contacto() {}

}