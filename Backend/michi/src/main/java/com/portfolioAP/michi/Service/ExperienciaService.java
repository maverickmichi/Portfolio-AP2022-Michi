package com.portfolioAP.michi.Service;

import com.portfolioAP.michi.Model.Experiencia;
import com.portfolioAP.michi.Repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService {

@Autowired
ExperienciaRepository experienciaRepo;
    public void crearExperiencia(Experiencia experiencia)
    {
        experienciaRepo.save(experiencia);
    }
    
    public void borrarExperiencia(Long id)
    {
        experienciaRepo.deleteById(id);
    }
    
    public List<Experiencia> listarExperiencias()
    {        
        return experienciaRepo.findAll();
    }    
}
