package com.portolio.michi.Controlador;

import com.portolio.michi.Entidad.Persona;
import com.portolio.michi.Interfaz.IServicioPersona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControladorPersona {
    @Autowired IServicioPersona iServiciopersona;
    
    @GetMapping("/personas/traer")    
    public List<Persona> getPersona(){
        return iServiciopersona.getPersona();
    }
    
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona){
        iServiciopersona.savePersona(persona);
        return "La persona se creo con éxito.";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        iServiciopersona.deletePersona(id);
        return "La persona se elimino sin problemas.";
    }
    
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id, @RequestParam("nombre") 
           String nuevoNombre, @RequestParam("apellido") String nuevoApellido,
           @RequestParam("img") String nuevoImg){
        Persona persona = iServiciopersona.findPersona(id);
        
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);
        
        iServiciopersona.savePersona(persona);
        return persona;
        
        
    }
    
    
}
