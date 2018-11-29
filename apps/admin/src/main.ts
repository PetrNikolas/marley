// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// ------------------------------------------------------------------------------
// Import module
// ------------------------------------------------------------------------------
import { AppModule } from './app/app.module';

// ------------------------------------------------------------------------------
// Import environment
// ------------------------------------------------------------------------------
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

