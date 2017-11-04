// ------------------------------------------------------------------------------
// Import polyfills.
// ------------------------------------------------------------------------------
import './polyfills.ts';


// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


// ------------------------------------------------------------------------------
// Import environments
// ------------------------------------------------------------------------------
import { environment } from './environments/environment';


// ------------------------------------------------------------------------------
// Import modules
// ------------------------------------------------------------------------------
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
