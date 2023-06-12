import { StudentService } from './../services/student/student.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InternshipsService } from './../services/internships/internships.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-solicitudes-internship',
  templateUrl: './solicitudes-internship.component.html',
  styleUrls: ['./solicitudes-internship.component.css']
})
export class SolicitudesInternshipComponent implements OnInit {
  pasantes!: any;
  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder, public studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      response => {
        this.pasantes = response;

        // Manejar la respuesta de éxito aquí
        console.log('Intership mostrados', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el intership', error);
      }
    )
  }

  goBack(){
    console.log("holasxsadsa");
    this.router.navigate(['homeEnterprise']);
  }

}
