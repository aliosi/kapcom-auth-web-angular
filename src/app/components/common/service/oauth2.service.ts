import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SessionStorageService} from 'ngx-webstorage';
import {ToastrService} from 'ngx-toastr';
import {Urls} from '../../util/constans';

@Injectable()
export class Oauth2Service {
  constructor(private _router: Router, private _http: HttpClient, private sessionStorageService: SessionStorageService, public toastr: ToastrService) {
  }

  obtainAccessToken(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.nombre_usuario);
    params.append('password', loginData.clave_usuario);
    params.append('grant_type', 'password');
    params.append('client_id', 'CommonApp');

    const headerJson = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('CommonApp:password')
    };

    const headers = new HttpHeaders(headerJson);

    this._http.post<any>(Urls.OAUTH2_GET_TOKEN, params.toString(), {headers: headers})
      .subscribe(
        data => this.saveToken(data, loginData),
        err => this.mensajeError(err)
      );
  }

  saveToken(token, loginData) {
    token.nombre_usuario = loginData.nombre_usuario;
    this.sessionStorageService.store('sessionUser', token);
    console.log('Obtained Access token');
    this._router.navigate(['/seleccionar-app']);
  }

  checkCredentials() {
    const token = this.sessionStorageService.retrieve('sessionUser');
    if (!token) {
      this._router.navigate(['/login']);
    }
  }

  logout() {
    this.sessionStorageService.clear('sessionUser');
    this._router.navigate(['/login']);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error || 'SERVER ERROR');
  }

  mensajeError(error: any) {
    console.log('Error', error);
    this.toastr.error('Usuario o Clave incorrectos', 'Error', {
      closeButton: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }
}
