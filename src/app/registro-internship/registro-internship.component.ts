import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternshipsService } from '../services/internships/internships.service';


@Component({
  selector: 'app-registro-internship',
  templateUrl: './registro-internship.component.html',
  styleUrls: ['./registro-internship.component.css']
})
export class RegistroInternshipComponent implements OnInit {

  internshipForm!: FormGroup;
  career!: any;

  constructor(public fb: FormBuilder, public intershipService: InternshipsService){}
  ngOnInit(): void {
    this.internshipForm = this.fb.group({
        internshipName : ['', Validators.required],
        details : ['', Validators.required],
        startDate : ['', Validators.required],
        endDate : ['', Validators.required],
    })

    //this.career
  }

  registrarInternship(){
    this.intershipService.registerNewInternship(this.internshipForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Intership creado exitosamente', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear el intership', error);
      }
      )
  }

}


