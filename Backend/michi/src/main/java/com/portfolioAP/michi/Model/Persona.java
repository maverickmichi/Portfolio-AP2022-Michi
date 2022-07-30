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
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    Long idpersona;
    @Basic
    String nombre;
    String apellido;
    String avatar;
    String descripcion;
    String posicion;

    
    public Persona(Long idpersona, String nombre, String apellido, String avatar, String descripcion, String posicion)
    
    {
        this.idpersona = idpersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.avatar = avatar;
        this.descripcion = descripcion;
        this.posicion = posicion;
         
    }
    
    public Persona(){}
}
