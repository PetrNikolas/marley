// Polyfills
import 'zone.js/dist/zone';
import 'reflect-metadata';

// RxJS
import 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Angular libs
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from './app/app-browser.module';

// Main function and bootstrapping app
export function main() {
  return platformBrowserDynamic().bootstrapModule(BrowserAppModule);
}
document.addEventListener('DOMContentLoaded', main, false);