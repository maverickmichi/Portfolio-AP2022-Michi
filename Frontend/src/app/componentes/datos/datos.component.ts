import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean = true; //CAMBIAR AL TERMINAR EL TP
  form:FormGroup;
  constructor(private miServicio:PersonaService,private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({        
      birthDate: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      aboutMe: ['',[Validators.required, Validators.minLength(10),]],
      mail: ['',[Validators.required, Validators.email]],
      location: ['',[Validators.required, Validators.minLength(2)]]

    })

  }

  get birthDate(){
	  return this.form.get('birthDate');
	}

  get mail(){
	  return this.form.get('mail');
	}

  get location(){
	  return this.form.get('location');
	}



  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];    
    })
  
  }

	guardarDatos(){
    if(this.form.valid){
		alert("¡Cambios guardados!");
    this.form.reset();
		document.getElementById("cerrarModalDatos")?.click();
	  }	
    else
    {
    alert("Error. Por favor, revisa los datos.");
    this.form.markAllAsTouched();
    }

  }
  mostrarDatosDatos(){
        

    this.form.get("birthDate")?.setValue(this.persona.birthDate);
    this.form.get("aboutMe")?.setValue(this.persona.aboutMe);
    this.form.get("mail")?.setValue(this.persona.mail);
    this.form.get("location")?.setValue(this.persona.location);

  }
}