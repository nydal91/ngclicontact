import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if(!localStorage.getItem('EMAIL_API_KEY')){
  localStorage.setItem('EMAIL_API_KEY',JSON.stringify({key:"api:key-f1d3832aea30593c47387e3a9d643402"}));
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


