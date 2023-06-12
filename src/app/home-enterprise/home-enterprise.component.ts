import { Component } from '@angular/core';
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
export class HomeEnterpriseComponent {
  private apiUrl = 'http://localhost:8080/api/v1/enterprises'; // URL de tu backend
  pasantes!: any;
  constructor(private router: Router, private http: HttpClient) {}

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


