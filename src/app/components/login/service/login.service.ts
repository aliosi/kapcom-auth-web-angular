
import {throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RecuperarClaveModel} from '../model/recuperar-clave.model';
import {Urls} from '../../util/constans';
import {RegistroPersonaModel} from '../model/registro-persona-model';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) {
  }

  recuperarClave(model: RecuperarClaveModel) {
    return this._http.post<any>(Urls.RECUPERAR_CLAVE_URL, JSON.stringify(model), Urls.httpOptions).pipe(catchError(this.errorHandler));
  }

  registrarPersona(model: RegistroPersonaModel) {
    return this._http.post<any>(Urls.REGISTRAR_PERSONA, JSON.stringify(model), Urls.httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'SERVER ERROR');
  }

}
