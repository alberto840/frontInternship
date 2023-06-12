import { EnterprisesService } from './../services/enterprises/enterprises.service';
import { StudentService } from './../services/student/student.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string ='';
  password: string ='';
  flag: boolean=false;
  flag1: boolean=false;

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      response => {
        this.students = response;
        // Manejar la respuesta de éxito aquí
        console.log('Students mostrados', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el Students', error);
      }
    )
    this.enterprisesService.getAllEnterprises().subscribe(
      res => {
        this.enterprises = res;
        // Manejar la respuesta de éxito aquí
        console.log('Enterprise mostrados', res);
      },
      err => {
        // Manejar el error aquí
        console.error('Error al mostrar el Enterprise', err);
      }
    )

  }

  students!: any;
  enterprises!: any;
  constructor(private router: Router, public fb: FormBuilder, public studentService: StudentService, public enterprisesService: EnterprisesService){}

  submitForm(){

    for (let i = 0; i < this.students.length; i++) {
      if(this.username == this.students[i].firstName){
        this.flag = true;
        console.log("es igual: "+this.students[i].firstName);
      }else{console.log("no es igual: "+this.students[i].firstName); this.flag = false;}
      console.log("students: "+this.students[i].firstName);
    }
    for (let j = 0; j < this.enterprises.length; j++) {
      if(this.username == this.enterprises[j].enterpriseName){
        this.flag1 = true;
        console.log("1es igual: "+this.enterprises[j].enterpriseName);
      }else{console.log("1no es igual: "+this.enterprises[j].enterpriseName); this.flag1 = false;}
      console.log("enterprises: "+this.enterprises[j].enterpriseName);
    }

    if(this.flag){
      console.log("existe cuenta estudiante");
      this.router.navigate(['/homeStudent'], { queryParams: { string: this.username } });
    }else{console.log("no existe cuenta");}
    if(this.flag1){
      console.log("existe cuenta empresa");
      this.router.navigate(['/homeEnterprise'], { queryParams: { string: this.username } });
    }else{console.log("no existe cuenta");}
  }

  registrarStudent(){
    this.router.navigate(['/registroStudent']);
  }
  registrarEmpresa(){
    this.router.navigate(['/registroEnterprise']);
  }
}
