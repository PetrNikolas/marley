// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// ------------------------------------------------------------------------------
// Import App module
// ------------------------------------------------------------------------------
import { AppModule } from "./app/app.module";

// ------------------------------------------------------------------------------
// Import environments
// ------------------------------------------------------------------------------
import { environment } from "./environments/environment";

if (environment.production) enableProdMode();

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
