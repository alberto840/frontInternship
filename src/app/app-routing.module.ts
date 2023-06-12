import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';
import { InternshipDetalleComponent } from './internship-detalle/internship-detalle.component';
import { PerfilEnterpriseComponent } from './perfil-enterprise/perfil-enterprise.component';
import { RegistroEnterpriseComponent } from './registro-enterprise/registro-enterprise.component';
import { RegistroInternshipComponent } from './registro-internship/registro-internship.component';
import { RegistroStudentComponent } from './registro-student/registro-student.component';
import { SolicitudesInternshipComponent } from './solicitudes-internship/solicitudes-internship.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-component', pathMatch: 'full' },
  { path: 'login-component', component: LoginComponent },
  { path: 'homeStudent', component: HomestudentComponent },
  { path: 'homeEnterprise', component: HomeEnterpriseComponent },
  { path: 'registroInternship', component: RegistroInternshipComponent },
  { path: 'registroEnterprise', component: RegistroEnterpriseComponent },
  { path: 'internshipDetails', component: InternshipDetalleComponent },
  { path: 'perfilEnterprise', component: PerfilEnterpriseComponent },
  { path: 'Solicitudes', component: SolicitudesInternshipComponent },
  { path: 'registroStudent', component: RegistroStudentComponent },];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
