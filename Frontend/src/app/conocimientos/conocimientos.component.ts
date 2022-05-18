import { Component, OnInit } from '@angular/core';
import { ConocimientosService } from '../services/conocimientos.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  skillsPr:any;
  constructor(private miServicio:ConocimientosService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosConocimientos().subscribe(data =>{
      console.log(data);
      this.skillsPr=data["skillsPr"];    
    })
  }

}