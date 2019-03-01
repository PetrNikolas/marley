import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    const message = error.message ? error.message : error.toString();
    const url = window.location.href;

    console.log('URL: ' + url + '/ MESSAGE: ' + message);

    throw error;
  }
}
