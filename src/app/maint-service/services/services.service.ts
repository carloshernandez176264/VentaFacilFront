import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from '../interfaces/services.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl: string = 'http://localhost:8081/api/services';
  private httpHeaders = new Headers({'Content-Type': 'application/json'});


  constructor(
    private httpClient: HttpClient
  ) { }


  createServices(services: Services){
    return this.httpClient.post<Services>(`${this.baseUrl}`, services)
  }
}
