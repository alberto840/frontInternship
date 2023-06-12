import { InternshipsService } from './../services/internships/internships.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homestudent',
  templateUrl: './homestudent.component.html',
  styleUrls: ['./homestudent.component.css']
})
export class HomestudentComponent implements OnInit{

  internships!: any;
  constructor(private route: ActivatedRoute, private router: Router, public fb: FormBuilder, public internshipsService: InternshipsService){}

  ngOnInit(): void {
    this.internshipsService.getAllInternships().subscribe(
      response => {
        this.internships = response;
        // Manejar la respuesta de éxito aquí
        console.log('Intership mostrados', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al mostrar el intership', error);
      }
    )
  }

  goIDetails(){
    this.router.navigate(['/internshipDetails']);
  }

}
