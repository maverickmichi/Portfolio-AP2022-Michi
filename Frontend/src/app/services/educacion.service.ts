import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string="http://localhost:3306/educacion"
  constructor(private http:HttpClient) { 
    console.log("Servicio Educacion funcionando - ¡A darle átomos!");
  }

  obtenerDatosEducacion():Observable<Educacion>{
    return this.http.get<Educacion>(this.url+"/"+id);
    }

  editarDatosEducacion(educacion:Educacion):Observable<any>{
    return this.http.post('http://localhost:3000/posts',educacion);
    }
    //Cambiar la url de post luego

  }

/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { 
    console.log("Servicio Educacion funcionando - ¡A darle átomos!");
  }

  public getUser():Observable<Educacion>{
      return this.http.get<Educacion>(`${this.apiServerUrl}/educacion/id/1`);
  }

  public updateEducacion(educacion: Educacion):Observable<Educacion>{
      return this.http.put<Educacion>(`${this.apiServerUrl}/update`,educacion);
  }
}
*/

/* 



} */

