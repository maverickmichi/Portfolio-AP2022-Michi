import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from '../services/mi-portfolio.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  persona:any;
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

}
