import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student/student.service';


@Component({
  selector: 'app-registro-student',
  templateUrl: './registro-student.component.html',
  styleUrls: ['./registro-student.component.css']
})
export class RegistroStudentComponent implements OnInit {

  studentForm!: FormGroup;
  career!: any;

  constructor(public fb: FormBuilder, public studentService: StudentService){}
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentId : ['', Validators.required],
        firstName : ['', Validators.required],
        lastName : ['', Validators.required],
        email : ['', Validators.required],
        username : ['', Validators.required],
        password : ['', Validators.required],
        year : ['', Validators.required],
        semester : ['', Validators.required],
        id_career : ['', Validators.required],
    })

    //this.career
  }

  registrar(){
    this.studentService.registerNewStudent(this.studentForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Estudiante creado exitosamente', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear el estudiante', error);
      }
      )
  }

}
