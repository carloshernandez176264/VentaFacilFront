import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintServiceComponent } from './pages/maint-service/maint-service.component';
import { ServicetRoutingModule } from './service-routing.module';
import { ServicesService } from './services/services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MaintServiceComponent
  ],
  imports: [
    CommonModule,
    ServicetRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers:[
    ServicesService
  ]
})
export class MaintServiceModule { }
