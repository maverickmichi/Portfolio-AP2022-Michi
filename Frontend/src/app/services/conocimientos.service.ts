import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConocimientosService {

  constructor(private http:HttpClient) { 
    console.log("Servicio Conocimiento funcionando - ¡A darle átomos!");
  }

  obtenerDatosConocimientos():Observable<any>{
    return this.http.get('./assets/data/skillsPr.json');
      }
}




