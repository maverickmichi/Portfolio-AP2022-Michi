package com.portfolioAP.michi.Controller;

import com.portfolioAP.michi.Model.Contacto;
import com.portfolioAP.michi.Model.Educacion;
import com.portfolioAP.michi.Model.Experiencia;
import com.portfolioAP.michi.Model.Localidad;
import com.portfolioAP.michi.Model.Mensajeria;
import com.portfolioAP.michi.Model.NivelED;
import com.portfolioAP.michi.Model.Persona;
import com.portfolioAP.michi.Model.Provincia;
import com.portfolioAP.michi.Model.RedSocial;
import com.portfolioAP.michi.Model.Skills;
import com.portfolioAP.michi.Model.TipoSkill;
import com.portfolioAP.michi.dto.UsuarioDTO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

    @GetMapping ("/usuario/{id}")
        @ResponseBody
        public UsuarioDTO devolverUsuario(@PathVariable Long id){
         
            Persona per = new Persona ();
            Contacto con = new Contacto ();
            Educacion edu = new Educacion ();
            Experiencia exp = new Experiencia ();
            Localidad loc = new Localidad ();
            Mensajeria msn = new Mensajeria ();
            NivelED lved = new NivelED();
            Provincia prov = new Provincia();
            RedSocial rsoc = new RedSocial();
            Skills skl = new Skills();
            TipoSkill tsk = new TipoSkill();
            
            UsuarioDTO userDTO = new UsuarioDTO();
            
            /*Persona*/
            userDTO.setIdpersona(per.getIdpersona());
            userDTO.setNombre(per.getNombre());
            userDTO.setApellido(per.getApellido());
            userDTO.setAvatar(per.getAvatar());
            userDTO.setDescripcion(per.getDescripcion());
            userDTO.setPosicion_actual(per.getPosicion());
            
            /*Localidad + Provincia*/
            userDTO.setLocalidad(loc.getNombre());
            userDTO.setProvincia(prov.getNombre());
            
            /*Contacto + Redes*/
            userDTO.setCelular(con.getTel_celular());
            userDTO.setMail(con.getMail());
            userDTO.setDiscord(msn.getTag());
            userDTO.setRedsocial(rsoc.getUrl());
            userDTO.setGithub(rsoc.getRepositorio());
            
            /*Skills + tipo*/
            userDTO.setHabilidad_skills(skl.getHabilidad());
            userDTO.setNivel_skills(skl.getNivel());
            userDTO.setTipo_skill(tsk.getTipo_skill());
            
            /*Educacion + */
            userDTO.setTitulo(edu.getTitulo());
            userDTO.setInstitucion(edu.getInstitucion());
            userDTO.setAnio_inicio_ed(edu.getAnio_inicio());
            userDTO.setAnio_egreso_ed(edu.getAnio_egreso());
            userDTO.setNivel_educativo(lved.getNivel());
            
            /*Persona*/
            userDTO.setPosicion(exp.getPosicion());
            userDTO.setLugar(exp.getLugar());
            userDTO.setAnio_inicio_ex(exp.getAnio_inicio());
            userDTO.setAnio_egreso_ex(exp.getAnio_egreso());
            
            return userDTO;

        }       
    
}