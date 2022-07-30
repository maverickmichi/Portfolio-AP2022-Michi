package com.portfolioAP.michi.Service;

import com.portfolioAP.michi.Model.Skills;
import com.portfolioAP.michi.Repository.SkillsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillsService {

@Autowired
SkillsRepository skillsRepo;
    public void crearSkills(Skills skills)
    {
        skillsRepo.save(skills);
    }
    
    public void borrarSkills(Long id)
    {
        skillsRepo.deleteById(id);
    }
    
    public List<Skills> listarSkills()
    {        
        return skillsRepo.findAll();
    }    
}
