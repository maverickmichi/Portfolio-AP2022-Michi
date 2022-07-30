package com.portfolioAP.michi.dto;
import java.io.Serializable;
import lombok.Data;


public @Data class UsuarioDTO implements Serializable{
    
    /*persona*/
    public Long idpersona;
    public String nombre;
    public String apellido;
    public String avatar;
    public String descripcion;
    public String posicion_actual;
    
    /*localidad*/
    public String localidad;
    
    /*provincia*/
    public String provincia;
    
    /*contacto*/
    public String celular;
    public String mail;
    
    /*mensajeria*/
    public String discord;
    
    /*red social*/
    public String redsocial;
    public String github;
    
    /*skills*/
    public String habilidad_skills;
    public String nivel_skills;
    
    /*tipo de skills*/
    public String tipo_skill;
   
    /*educacion*/
    public String titulo;
    public String institucion;
    public Number anio_inicio_ed;
    public Number anio_egreso_ed;
    
    /*nivel educativo*/
    public String nivel_educativo;
    
    /*experiencia*/
    public String posicion;
    public String lugar;
    public Number anio_inicio_ex;
    public Number anio_egreso_ex;

    
}
