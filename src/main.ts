import { enableProdMode, Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import {Router} from '@angular/router';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  

  
