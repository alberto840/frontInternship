import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterprisesService } from '../services/enterprises/enterprises.service';

@Component({
  selector: 'app-registro-enterprise',
  templateUrl: './registro-enterprise.component.html',
  styleUrls: ['./registro-enterprise.component.css']
})
export class RegistroEnterpriseComponent implements OnInit {

  enterpriseForm!: FormGroup;
  career!: any;

  constructor(public fb: FormBuilder, public enterpriseService: EnterprisesService){}
  ngOnInit(): void {
    this.enterpriseForm = this.fb.group({
      enterpriseId : ['', Validators.required],
      documentId : ['', Validators.required],
        enterpriseName : ['', Validators.required],
        email : ['', Validators.required],
        username : ['', Validators.required],
        password : ['', Validators.required],
    })

    //this.career
  }

  registrarEnterprise(){
    this.enterpriseService.registerNewEnterprise(this.enterpriseForm.value).subscribe(
      response => {
        // Manejar la respuesta de éxito aquí
        console.log('Empresa creado exitosamente', response);
      },
      error => {
        // Manejar el error aquí
        console.error('Error al crear el empresa', error);
      }
      )
  }

}

