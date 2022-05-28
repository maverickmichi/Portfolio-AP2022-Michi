import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { 
    console.log("Servicio Persona funcionando - ¡A darle átomos!");
  }

  obtenerDatosPersona():Observable<any>{
    return this.http.get('./assets/data/persona.json');
    }
}
