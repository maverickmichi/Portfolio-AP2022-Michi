import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  constructor(private http:HttpClient) { 
    console.log("Servicio Skills funcionando - ¡A darle átomos!");
}

obtenerDatosSkills():Observable<any>{
  return this.http.get('./assets/data/skills.json');
    }
}
