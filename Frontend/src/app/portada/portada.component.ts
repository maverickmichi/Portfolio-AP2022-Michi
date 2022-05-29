import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../entidades/persona';
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
      let fullName = this.form.get("fullName")?.value;
      let birthDate = this.form.get("birthDate")?.value;
      let aboutMe = this.form.get("aboutMe")?.value;
      let mail = this.form.get("mail")?.value;
      let image = this.form.get("image")?.value;
      let position = this.form.get("position")?.value;
      let location = this.form.get("location")?.value; 

      let personaEditar = new Persona(fullName,birthDate,aboutMe,mail,image,position,location);
      this.miServicio.editarDatosPersona(personaEditar).subscribe({
        next: (data) => {this.persona=personaEditar;},
        error: (error) => {

          alert("Parece que hubo un problema y no se pudo actualizar el registro. Por favor, intenta nuevamente mas tarde o contacte al administrador.");

        },
      
      })
          
       
      this.form.reset();
	  	document.getElementById("cerrarModalEncabezado")?.click();
      }	
    else
      {       
      this.form.markAllAsTouched();
      } 

  }

      mostrarDatosEncabezado(){        

        this.form.get("fullName")?.setValue(this.persona.fullName);
        this.form.get("image")?.setValue(this.persona.image);
        this.form.get("position")?.setValue(this.persona.position);
        
      }
           
    }
  