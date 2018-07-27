// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";

// ------------------------------------------------------------------------------
// Import RxJS
// ------------------------------------------------------------------------------
import { Observable, of } from "rxjs";

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data["preload"]) {
      // Add the route path to the preloaded module array
      this.preloadedModules.push(route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
