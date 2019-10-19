import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],

  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'product', component: ProductListComponent},
      {path: 'product/:id',
      canActivate:[ProductDetailGuard], 
      component: ProductDetailComponent
    },
    
    ]),
    
    
  ]
})
export class ProductModule { }
