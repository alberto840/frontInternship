import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-enterprise',
  templateUrl: './perfil-enterprise.component.html',
  styleUrls: ['./perfil-enterprise.component.css']
})
export class PerfilEnterpriseComponent {

  constructor(private router: Router){}
}
