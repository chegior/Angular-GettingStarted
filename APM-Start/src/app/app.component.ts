
import {Component} from '@angular/core';

@Component({ //DECORATOR
  selector:'pm-root', //Componet Name in HTML
  template:` 
  <nav class = 'navbar navbar-expand navbar-light bg-light'>
    <a class = 'navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class = 'nav-link' [routerLink]="['/welcome']">Home</a></li>  
      <li><a class = 'nav-link' [routerLink]="['/product']">Product</a></li> 
    </ul>
  </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  
  ` //Define the view, make sure to use correct SYNTAX ALSO USE ALT+96 Backticks
})

export class AppComponent{ //PascalCase
  pageTitle: string = 'Acme Products Management'// camelCase
};

