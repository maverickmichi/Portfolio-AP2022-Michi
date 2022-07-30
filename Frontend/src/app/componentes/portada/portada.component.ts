import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../entidades/persona';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})

export class PortadaComponent implements OnInit {
  persona!:Persona;  
  usuarioAutenticado:boolean = true; //cambiar cuando logon
  form:FormGroup;
  constructor(private miServicio:PersonaService,private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({        
      nombre: ['',[Validators.required, Validators.minLength(5),]],
      apellido: ['',[Validators.required, Validators.minLength(5),]],       
      posicion: ['',[Validators.required, Validators.minLength(5)]],     
      avatar: ['http://',[Validators.required, Validators.pattern('/(https?:\/\/.*\.(?:png|jpg|svg|gif))/i')]],

    })

  }

  get nombre(){
	  return this.form.get('nombre');
	}

  get apellido(){
	  return this.form.get('apellido');
	}

  get posicion(){
	  return this.form.get('posicion');
	}

  get avatar(){
	  return this.form.get('avatar');
	}

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona(1).subscribe(data =>{
      console.log(data);
      this.persona=data;
    })
  }

	guardarEncabezado(){
		if(this.form.valid){
      let nombre = this.form.get("nombre")?.value;
      let apellido = this.form.get("apellido")?.value;
      let avatar = this.form.get("avatar")?.value;
      let descripcion = this.form.get("descripcion")?.value;
      let posicion = this.form.get("posicion")?.value;
      
      let personaEditar = new Persona(nombre, apellido, avatar, descripcion, posicion);
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

        this.form.get("nombre")?.setValue(this.persona.nombre);
        this.form.get("apellido")?.setValue(this.persona.apellido);
        this.form.get("avatar")?.setValue(this.persona.avatar);
        this.form.get("posicion")?.setValue(this.persona.posicion);
        
      }
           
    }
  