import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from '../services/mi-portfolio.service';

@Component({
  selector: 'app-otros-skills',
  templateUrl: './otros-skills.component.html',
  styleUrls: ['./otros-skills.component.css']
})
export class OtrosSkillsComponent implements OnInit {
  conocimientosDes:any;
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.conocimientosDes=data["conocimientos-ds"];    
    })
  }

}

