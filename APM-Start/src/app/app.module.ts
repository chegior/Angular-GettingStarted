import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//make sure to IMPORT  THE PROPER COMPONENT
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
//Propertie are arrays
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule.forRoot([      
      {path: 'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome', pathMatch:'full'},
    ]),
    ProductModule
  ],
  //external MODULES available

  declarations: [
    AppComponent,
    WelcomeComponent
  ],//we can add more components here
  
  bootstrap: [
    AppComponent
  ]//
})
export class AppModule { }
