package com.portfolioAP.michi.Repository;

import com.portfolioAP.michi.Model.Domicilio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomicilioRepository extends JpaRepository<Domicilio, Long>{
    
}
