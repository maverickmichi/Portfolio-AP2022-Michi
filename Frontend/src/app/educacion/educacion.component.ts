import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  constructor(private miServicio:EducacionService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data);
      this.educacion=data["educacion"];    
    })
  }

}
