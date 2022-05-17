import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from '../services/mi-portfolio.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  skillsPr:any;
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.skillsPr=data["skillsPr"];    
    })
  }

}