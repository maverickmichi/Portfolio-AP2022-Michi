package com.portfolioAP.michi.Repository;

import com.portfolioAP.michi.Model.Contacto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long>{
    
}
