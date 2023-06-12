import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internship-detalle',
  templateUrl: './internship-detalle.component.html',
  styleUrls: ['./internship-detalle.component.css']
})
export class InternshipDetalleComponent implements OnInit {
  nombreIntern: String = '';
  detailIntern: String = '';
  startD: String = '';
  endD: String = '';
  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nombreIntern = params['string'];
      this.detailIntern = params['string1'];
      this.startD = params['string2'];
      this.endD = params['string3'];
    });
  }

goBack(){
  this.router.navigate(['homeStudent']);
}

}
