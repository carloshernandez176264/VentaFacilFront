import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Services } from '../../interfaces/services.interface';

@Component({
  selector: 'app-maint-service',
  templateUrl: './maint-service.component.html',
  styleUrls: ['./maint-service.component.css']
})
export class MaintServiceComponent {

  constructor(
    private services: ServicesService,
  ) { }

  addService(services:Services){
    this.services.createServices(services).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )

  }

}

