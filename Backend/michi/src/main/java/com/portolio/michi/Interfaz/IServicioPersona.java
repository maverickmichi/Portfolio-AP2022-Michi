
package com.portolio.michi.Interfaz;

import com.portolio.michi.Entidad.Persona;
import java.util.List;


public interface IServicioPersona {
    
    //Llamar lista pers       
    public List<Persona> getPersona();
    
    //Guardar
    public void savePersona(Persona persona);
    
    //Eliminar
    public void deletePersona(Long id);
    
    //Buscar pers por ID
    public Persona findPersona(Long id);
}
