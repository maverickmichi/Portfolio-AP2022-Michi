import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';
import { Domicilio } from '../entidades/domicilio';
import { Contacto } from '../entidades/contacto';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  url:string="http://localhost:3306/persona"
  constructor(private http:HttpClient) { 
    console.log("Servicio Persona funcionando - ¡A darle átomos!");
  } 
  
  obtenerDatosPersona():Observable<Persona>{
    return this.http.get<Persona>(this.url+"/"+id);
    }

  editarDatosPersona(persona:Persona):Observable<any>{
    return this.http.post('http://localhost:3000/posts',persona);
    }
    
}

export class DomicilioService {
  url:string="http://localhost:3306/persona"
  constructor(private http:HttpClient) { 
    console.log("Servicio Domicilio funcionando - ¡A darle átomos!");
  } 
  
  obtenerDatosDomicilio():Observable<Domicilio>{
    return this.http.get<Domicilio>(this.url+"/"+id);
    }

  editarDatosDomicilio(domicilio:Domicilio):Observable<any>{
    return this.http.post('http://localhost:3000/posts',domicilio);
    }
    
}

export class ContactoService {
  url:string="http://localhost:3306/persona"
  constructor(private http:HttpClient) { 
    console.log("Servicio Contacto funcionando - ¡A darle átomos!");
  } 
  
  obtenerDatosContacto():Observable<Contacto>{
    return this.http.get<Contacto>(this.url+"/"+id);
    }

  editarDatosContacto(contacto:Contacto):Observable<any>{
    return this.http.post('http://localhost:3000/posts',contacto);
    }
    
}