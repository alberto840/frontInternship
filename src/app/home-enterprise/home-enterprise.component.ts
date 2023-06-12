import { StudentService } from './../services/student/student.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-enterprise',
  templateUrl: './home-enterprise.component.html',
  styleUrls: ['./home-enterprise.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeEnterpriseComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/api/v1/enterprises'; // URL de tu backend
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

  getEmpresas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  goPerfil(){
    this.router.navigate(['/perfilEnterprise']);
  }
}

// empresa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


