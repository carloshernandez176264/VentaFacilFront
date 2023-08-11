import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

const routes: Routes = [

  { path: "", redirectTo: "products", pathMatch: "full" },

  {
    path:'',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },

  {
    path: 'services',
    loadChildren: () => import('./maint-service/service.module').then(m => m.MaintServiceModule)
  },

  // {
  //   path:'**', redirectTo:'products', pathMatch:'full'
  // }

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
