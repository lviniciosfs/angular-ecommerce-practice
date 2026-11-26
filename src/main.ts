import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Products } from './app/products/products.component';
import { provideHttpClient } from '@angular/common/http';

const appConfig = {
  providers: [provideHttpClient()],
};

@Component({
  selector: 'app-root',
  template: `
    <app-products></app-products>
  `,
  imports: [Products],
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App, appConfig);
