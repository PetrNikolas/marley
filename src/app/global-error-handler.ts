// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { ErrorHandler, forwardRef, Inject } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    const MESSAGE = error.message ? error.message : error.toString();
    const URL = window.location.href;
    const ERROR_MESSAGE =
      "URL: " +
      URL +
      "/ User ID: " +
      sessionStorage.getItem("uid") +
      "/ User role: " +
      sessionStorage.getItem("user_role") +
      "/ MESSAGE: " +
      MESSAGE;
    console.log(ERROR_MESSAGE);

    throw error;
  }
}
