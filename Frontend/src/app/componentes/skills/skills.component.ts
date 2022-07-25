import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any;
  usuarioAutenticado:boolean = true; //CAMBIAR AL TERMINAR EL TP
  form:FormGroup;
  constructor(private miServicio:SkillsService,private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({        
      soft: ['',[Validators.required, Validators.minLength(2)]],
      hard: ['',[Validators.required, Validators.minLength(2)]],
      idiomas: ['',[Validators.required, Validators.minLength(4)]]    

    })

  }

  get soft(){
	  return this.form.get('soft');
	}

  get hard(){
	  return this.form.get('hard');
	}

  get idioma(){
	  return this.form.get('idioma');
	}

  ngOnInit(): void {
    this.miServicio.obtenerDatosSkills().subscribe(data =>{
      console.log(data);
      this.skills=data["skills"];    
    })
  }

  guardarSkills(){
    if(this.form.valid){
      alert("¡Cambios guardados!");
      this.form.reset();
		alert("Enviar los datos al servicio (servidor)");
		document.getElementById("cerrarModalSkills")?.click();
	}	
  else
  {
  alert("Error. Por favor, revisa los datos.");
  this.form.markAllAsTouched();
  }

}

mostrarDatosSkills(){
        

  this.form.get("soft")?.setValue(this.skills.soft);
  this.form.get("hard")?.setValue(this.skills.hard);
  this.form.get("idioma")?.setValue(this.skills.idioma);

}

} 