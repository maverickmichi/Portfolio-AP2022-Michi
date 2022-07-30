package com.portfolioAP.michi.Repository;

import com.portfolioAP.michi.Model.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends JpaRepository<Skills, Long>{
    
}
