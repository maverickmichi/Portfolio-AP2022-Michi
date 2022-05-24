import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from '../services/mi-portfolio.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean = true; //CAMBIAR AL TERMINAR EL TP
  constructor(private miServicio:MiPortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];    
    })
  }

}
