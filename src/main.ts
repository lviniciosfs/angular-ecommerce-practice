import { Component, signal, inject, ApplicationConfig } from '@angular/core';
import { Routes, Router, provideRouter, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { Products } from './app/products/products.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes =[
  {
    path: 'products',
    component: Products,
  },
];

const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes)],
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class App {
  router = inject(Router)
  name = 'Angular';
  counter = signal(0);

  ngOnInit(){
  }
}

bootstrapApplication(App, appConfig);
