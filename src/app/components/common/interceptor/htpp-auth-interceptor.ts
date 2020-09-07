
import {throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';


import {LocalStorage, SessionStorage} from 'ngx-webstorage';


@Injectable()
export class HtppAuthInterceptor implements HttpInterceptor {

  @SessionStorage('sessionUser')
  public sessionUser: any;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted request ... ');

    if (this.sessionUser) {
      console.log('Sending request with new header now ...');
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.sessionUser.access_token}`
        }
      });
    }

// send the newly created request
    return next.handle(req).pipe(catchError((error, caught) => {
// intercept the respons error and displace it to the console
      console.log('Error Occurred');
      console.log(error);
// return the error to the method that called it
      return observableThrowError(error);
    })) as any;
  }
}
