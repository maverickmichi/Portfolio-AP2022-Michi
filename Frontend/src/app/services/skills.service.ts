import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../entidades/skills';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  url:string="http://localhost:3306/skills"
  constructor(private http:HttpClient) { 
    console.log("Servicio Skills funcionando - ¡A darle átomos!");
}

obtenerDatosSkills():Observable<Skills>{
  return this.http.get<Skills>(this.url+"/"+id);
    }

editarDatosSkills(skills:Skills):Observable<any>{
  return this.http.post('http://localhost:3000/posts',skills);
    }
    //Cambiar la url de post luego

}

/*import { HttpClient } from '@angular/common/http';
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

*/





