import { Component, OnInit } from '@angular/core';
import { InternshipsService } from './../services/internships/internships.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-enterprise',
  templateUrl: './perfil-enterprise.component.html',
  styleUrls: ['./perfil-enterprise.component.css']
})
export class PerfilEnterpriseComponent implements OnInit {
  internships!: any;
  constructor(private router: Router, public fb: FormBuilder, public internshipsService: InternshipsService){}
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

  goSoli(){
    this.router.navigate(['Solicitudes']);
  }
}
