import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { MaintServiceComponent } from "./pages/maint-service/maint-service.component";

const routes: Routes = [
  {
    path:'services',
    component: MaintServiceComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ServicetRoutingModule{}
