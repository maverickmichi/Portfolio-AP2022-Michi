import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { OtrosSkillsComponent } from './otros-skills/otros-skills.component';
import { DatosComponent } from './datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    ConocimientosComponent,
    EducacionComponent,
    OtrosSkillsComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
