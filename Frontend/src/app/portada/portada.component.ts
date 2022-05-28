import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../services/persona.service';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})

export class PortadaComponent implements OnInit {
  persona:any;
  
  usuarioAutenticado:boolean = true; 
  form:FormGroup;
  constructor(private miServicio:PersonaService,private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({        
      fullName: ['',[Validators.required, Validators.minLength(5),]],     
      position: ['',[Validators.required, Validators.minLength(5)]],     
      image: ['http://',[Validators.required, Validators.pattern('/(https?:\/\/.*\.(?:png|jpg|svg|gif))/i')]],

    })

  }

  get fullName(){
	  return this.form.get('fullName');
	}

  get position(){
	  return this.form.get('position');
	}

  get image(){
	  return this.form.get('image');
	}

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

	guardarEncabezado(){
		if(this.form.valid){
      alert("¡Cambios guardados!");
      this.form.reset();
		document.getElementById("cerrarModalEncabezado")?.click();
	}	
  else
  {
  alert("Error. Por favor, revisa los datos.");
  this.form.markAllAsTouched();
  } 
 }
}