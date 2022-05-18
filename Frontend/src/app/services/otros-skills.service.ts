import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtrosSkillsService {

  constructor(private http:HttpClient) { 
    console.log("Servicio Otros Skills funcionando - ¡A darle átomos!");
  }

  obtenerDatosOtrosSkills():Observable<any>{
    return this.http.get('./assets/data/skillsDs.json');
     }

}


