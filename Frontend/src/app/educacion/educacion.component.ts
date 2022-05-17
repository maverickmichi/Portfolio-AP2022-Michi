import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from '../services/mi-portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  education:any;
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data);
      this.education=data["education"];    
    })
  }

}
