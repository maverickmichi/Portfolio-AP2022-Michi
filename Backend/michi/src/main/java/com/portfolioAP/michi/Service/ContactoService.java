package com.portfolioAP.michi.Service;

import com.portfolioAP.michi.Model.Contacto;
import com.portfolioAP.michi.Repository.ContactoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactoService {

@Autowired
ContactoRepository contactoRepo;
    public void crearContacto(Contacto contacto)
    {
        contactoRepo.save(contacto);
    }
    
    public void borrarContacto(Long id)
    {
        contactoRepo.deleteById(id);
    }
    
    public List<Contacto> listarContactos()
    {        
        return contactoRepo.findAll();
    }    
}
