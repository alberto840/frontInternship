import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';
import { PerfilEnterpriseComponent } from './perfil-enterprise/perfil-enterprise.component';
import { SolicitudesInternshipComponent } from './solicitudes-internship/solicitudes-internship.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomestudentComponent,
    HomeEnterpriseComponent,
    PerfilEnterpriseComponent,
    SolicitudesInternshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
