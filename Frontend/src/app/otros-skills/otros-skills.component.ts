import { Component, OnInit } from '@angular/core';
import { OtrosSkillsService } from '../services/otros-skills.service';

@Component({
  selector: 'app-otros-skills',
  templateUrl: './otros-skills.component.html',
  styleUrls: ['./otros-skills.component.css']
})
export class OtrosSkillsComponent implements OnInit {
  skillsDs:any;
  constructor(private miServicio:OtrosSkillsService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosOtrosSkills().subscribe(data =>{
      console.log(data);
      this.skillsDs=data["skillsDs"];    
    })
  }

}

