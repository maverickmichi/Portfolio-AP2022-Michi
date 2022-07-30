package com.portfolioAP.michi.Service;

import com.portfolioAP.michi.Model.Domicilio;
import com.portfolioAP.michi.Repository.DomicilioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomicilioService {

@Autowired
DomicilioRepository domicilioRepo;
    public void crearDomicilio(Domicilio domicilio)
    {
        domicilioRepo.save(domicilio);
    }
    
    public void borrarDomicilio(Long id)
    {
        domicilioRepo.deleteById(id);
    }
    
    public List<Domicilio> listarDomicilios()
    {        
        return domicilioRepo.findAll();
    }    
}
