import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [



  {
    path:'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },

  {
    path: 'services',
    loadChildren: () => import('./maint-service/service.module').then(m => m.MaintServiceModule)
  },

  { path: "", redirectTo: "products", pathMatch: "full" },


  {
    path:'**', redirectTo:'products', pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
