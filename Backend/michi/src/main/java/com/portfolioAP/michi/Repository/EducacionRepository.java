package com.portfolioAP.michi.Repository;

import com.portfolioAP.michi.Model.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducacionRepository extends JpaRepository<Educacion, Long>{
    
}