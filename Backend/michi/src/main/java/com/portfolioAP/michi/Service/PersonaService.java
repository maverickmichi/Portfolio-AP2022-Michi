package com.portfolioAP.michi.Service;

import com.portfolioAP.michi.Model.Persona;
import com.portfolioAP.michi.Repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {

@Autowired
PersonaRepository personaRepo;
    public void crearPersona(Persona persona)
    {
        personaRepo.save(persona);
    }
    
    public void borrarPersona(Long id)
    {
        personaRepo.deleteById(id);
    }
    
    public List<Persona> listarPersonas()
    {        
        return personaRepo.findAll();
    }    

    public Persona buscarPersona(Long id) {
        return personaRepo.findById(id).orElse(null);
    }

    public void modificarPersona(Persona persona) {
        personaRepo.save(persona);
    }
}
