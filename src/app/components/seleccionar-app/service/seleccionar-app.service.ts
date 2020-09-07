
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SeleccionarAppModel} from '../model/seleccionar-app-model';
import {Urls} from '../../util/constans';

@Injectable()
export class SeleccionarAppService {

  constructor(private _http: HttpClient) {
  }

  seleccionarApp(model: SeleccionarAppModel) {
    return this._http.post<any>(Urls.SELECCIONAR_APP_URL, JSON.stringify(model), Urls.httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'SERVER ERROR');
  }

}
