// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { ErrorHandler, forwardRef, Inject } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    const message = error.message ? error.message : error.toString();
    const url = window.location.href;
    console.log("URL: " + url + "/ MESSAGE: " + message);
    throw error;
  }
}
