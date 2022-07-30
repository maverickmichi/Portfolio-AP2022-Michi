package com.portfolioAP.michi.Controller;

import com.portfolioAP.michi.Model.Persona;
import com.portfolioAP.michi.Service.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
@Autowired
PersonaService personaService;

    @GetMapping("/persona")
    public String saludar(@RequestParam String nombre, String apellido)
    {    
        return "¡Bienvenid@ " + nombre + " " + apellido + "!";    
    }
    
    @GetMapping("/persona/lista")
    @ResponseBody
    public List<Persona> listaPersonas() {
        return personaService.listarPersonas();
    }
    
    @PostMapping("/persona")
    public void crearPersona(@RequestBody Persona persona)
    {
    personaService.crearPersona(persona);
    }        
    
    @DeleteMapping("/persona/{id}")
    public void borrarPersona(@PathVariable Long id)
    {
        personaService.borrarPersona(id);
    }        
    
    @ResponseBody
    @GetMapping("/persona/{id}")
    public Persona buscarPersona(@PathVariable Long id) {
        return personaService.buscarPersona(id);
    }
    
    @PutMapping("/persona")
    public void modificarPersona(@RequestBody Persona persona){
        personaService.modificarPersona(persona);
    }

}




