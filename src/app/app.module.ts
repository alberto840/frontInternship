import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';
import { PerfilEnterpriseComponent } from './perfil-enterprise/perfil-enterprise.component';
import { SolicitudesInternshipComponent } from './solicitudes-internship/solicitudes-internship.component';
import { RegistroStudentComponent } from './registro-student/registro-student.component';
import { RegistroEnterpriseComponent } from './registro-enterprise/registro-enterprise.component';
import { RegistroInternshipComponent } from './registro-internship/registro-internship.component';
import { InternshipDetalleComponent } from './internship-detalle/internship-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomestudentComponent,
    HomeEnterpriseComponent,
    PerfilEnterpriseComponent,
    SolicitudesInternshipComponent,
    RegistroStudentComponent,
    RegistroEnterpriseComponent,
    RegistroInternshipComponent,
    InternshipDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
