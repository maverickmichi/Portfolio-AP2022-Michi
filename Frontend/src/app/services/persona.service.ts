import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { 
    console.log("Servicio Persona funcionando - ¡A darle átomos!");
  }

  public getUser():Observable<Persona>{
      return this.http.get<Persona>(`${this.apiServerUrl}/persona/id/1`);
  }

  public updatePersona(persona: Persona):Observable<Persona>{
      return this.http.put<Persona>(`${this.apiServerUrl}/update`,persona);
  }
}
  /*
  obtenerDatosPersona():Observable<any>{
    return this.http.get('./assets/data/persona.json');
    }

  editarDatosPersona(persona:Persona):Observable<any>{
    return this.http.post('http://localhost:3000/posts',persona);
    }
    //Cambiar la url de post luego
}
*/