import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiPortfolioService {

  constructor(private http:HttpClient) { 
    console.log("Servicio funcionando - ¡A darle átomos!");
  }

  obtenerDatosPersona():Observable<any>{
  return this.http.get('./assets/data/persona.json');
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get('./assets/data/educacion.json');
    }

  obtenerDatosConocimientosDes():Observable<any>{
    return this.http.get('./assets/data/conocimientos-ds.json');
     }

  obtenerDatosConocimientosPrg():Observable<any>{
    return this.http.get('./assets/data/conocimientos-pr.json');
      }
}

