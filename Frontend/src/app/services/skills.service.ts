import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../entidades/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { 
    console.log("Servicio Skills funcionando - ¡A darle átomos!");
  }

  public getUser():Observable<Skills>{
      return this.http.get<Skills>(`${this.apiServerUrl}/skills/id/1`);
  }

  public updateSkills(skills: Skills):Observable<Skills>{
      return this.http.put<Skills>(`${this.apiServerUrl}/update`,skills);
  }
}


/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../entidades/skills';

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

editarDatosSkills(skills:Skills):Observable<any>{
  return this.http.post('http://localhost:3000/posts',Skills);
    }
    //Cambiar la url de post luego

}*/


