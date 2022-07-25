
package com.portolio.michi.Repositorio;

import com.portolio.michi.Entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorioPersona extends JpaRepository<Persona,Long> {
    
}
