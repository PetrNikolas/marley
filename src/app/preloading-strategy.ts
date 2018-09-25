// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";

// ------------------------------------------------------------------------------
// Import RxJS
// ------------------------------------------------------------------------------
// tslint:disable-next-line:import-blacklist
import { Observable, of } from "rxjs";

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
