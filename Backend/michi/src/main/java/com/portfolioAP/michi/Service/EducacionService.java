package com.portfolioAP.michi.Service;

import com.portfolioAP.michi.Model.Educacion;
import com.portfolioAP.michi.Repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionService {

@Autowired
EducacionRepository educacionRepo;
    public void crearEducacion(Educacion educacion)
    {
        educacionRepo.save(educacion);
    }
    
    public void borrarEducacion(Long id)
    {
        educacionRepo.deleteById(id);
    }
    
    public List<Educacion> listarEducaciones()
    {        
        return educacionRepo.findAll();
    }    
}