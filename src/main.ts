import { Component, signal, inject, ApplicationConfig } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes =[
];

const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};

@Component({
  selector: 'app-root',
  imports: [],
  template: ''
})
export class App {
  router = inject(Router)
  name = 'Angular';
  counter = signal(0);

  ngOnInit(){
  }
}

bootstrapApplication(App, appConfig);
