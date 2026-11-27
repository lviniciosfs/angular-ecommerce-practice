import { Component, signal, inject, ApplicationConfig } from '@angular/core';
import { Routes, Router, provideRouter, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { productRoutes } from './app/products/products.routes';

const routes: Routes =[
  {
    path: '',
    loadChildren: () => productRoutes,
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
