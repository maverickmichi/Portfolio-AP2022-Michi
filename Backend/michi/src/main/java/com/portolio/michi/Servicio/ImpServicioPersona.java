
package com.portolio.michi.Servicio;

import com.portolio.michi.Entidad.Persona;
import com.portolio.michi.Interfaz.IServicioPersona;
import com.portolio.michi.Repositorio.IRepositorioPersona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpServicioPersona implements IServicioPersona{
    @Autowired IRepositorioPersona iRepositoriopersona;
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = iRepositoriopersona.findAll();
        return persona;        
    }

    @Override
    public void savePersona(Persona persona) {
       iRepositoriopersona.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        iRepositoriopersona.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = iRepositoriopersona.findById(id).orElse(null);
        return persona;
    }
    
}
