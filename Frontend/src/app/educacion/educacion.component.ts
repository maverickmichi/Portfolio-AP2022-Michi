import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  usuarioAutenticado:boolean = true; //CAMBIAR AL TERMINAR EL TP
  form:FormGroup;
  constructor(private miServicio:EducacionService,private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({        
      school: ['',[Validators.required, Validators.minLength(3)]],
      career: ['',[Validators.required, Validators.minLength(3)]],
      start: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      end: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]]

    })

   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data);
      this.educacion=data["educacion"];    
    })
  }

	guardarEducacion(){
		if(this.form.valid){
      alert("¡Cambios guardados!");
      this.form.reset();
		document.getElementById("cerrarModalEducacion")?.click();
	}	
  else
  {
  alert("Error. Por favor, revisa los datos.");
  this.form.markAllAsTouched();
  }

  }

  mostrarDatosEducacion(){        

    this.form.get("school")?.setValue(this.educacion.school);
    this.form.get("career")?.setValue(this.educacion.career);
    this.form.get("start")?.setValue(this.educacion.start);
    this.form.get("end")?.setValue(this.educacion.end);

  }

}
