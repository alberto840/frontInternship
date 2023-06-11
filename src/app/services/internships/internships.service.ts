import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InternshipsService {
  private API_SERVER = "http://localhost:8080/api/v1/internships";

  constructor(private httpClient: HttpClient) { }

  public getAllInternships(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewInternship(internship: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, internship)
  }
}
