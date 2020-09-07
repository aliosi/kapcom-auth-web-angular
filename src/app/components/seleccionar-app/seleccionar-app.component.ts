import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CommonService} from '../common/service/common.service';
import {Oauth2Service} from '../common/service/oauth2.service';
import {SeleccionarAppModel} from './model/seleccionar-app-model';
import {SeleccionarAppService} from './service/seleccionar-app.service';
import {SessionStorage, SessionStorageService} from 'ngx-webstorage';
import {MainModelCrudComponent} from '../common/component/main-model-crud.component';
import {ToastrService} from 'ngx-toastr';
import {Urls} from '../util/constans';

@Component({
  selector: 'app-seleccionar-app',
  templateUrl: './seleccionar-app.component.html'
})
export class SeleccionarAppComponent extends MainModelCrudComponent implements OnInit {

  @SessionStorage('sessionUser')
  public sessionUser: any;

  public aplicacionesList: any[];
  public rolList: any[];
  public model: SeleccionarAppModel;

  constructor(public toastr: ToastrService, private _rotuer: Router, private activatedRoute: ActivatedRoute, private service: SeleccionarAppService, private commonService: CommonService, private oauth2Service: Oauth2Service, private sessionStorageService: SessionStorageService) {
    super(toastr);
  }

  ngOnInit() {

    this.oauth2Service.checkCredentials();
    this.model = new SeleccionarAppModel();
    this.model.nombre_usuario = this.sessionUser.nombre_usuario;
    this.loadDataSources();

    //
    this.activatedRoute.queryParams.subscribe((params: Params) => {

      if (!this.sessionUser) {
        this.storeSession(params);
        const url: string = this._rotuer.url.substring(0, this._rotuer.url.indexOf('?'));
        this._rotuer.navigateByUrl(url);
      } else {
        if (params['access_token']) {
          if (this.sessionUser.access_token !== params['access_token']) {
            this.storeSession(params);
          }
          const url: string = this._rotuer.url.substring(0, this._rotuer.url.indexOf('?'));
          this._rotuer.navigateByUrl(url);
        }
      }
    });
  }

  public loadDataSources() {
    {
      const url = Urls.APP_USUARIO_URL.replace('{username}', this.sessionUser.nombre_usuario);
      this.commonService.commonGetRestWithParams(url, 'foo=1', true).subscribe((response) => {
        this.aplicacionesList = response.records;
        // console.log('this.aplicacionesList', this.aplicacionesList);
      }, (error) => {
        console.log(error);
        // this.showErrorFast();
      });
    }

  }

  public storeSession(params: any) {
    const token = {
      access_token: params['access_token'],
      expires_in: params['expires_in'],
      jti: params['jti'],
      nombre_usuario: params['nombre_usuario'],
      refresh_token: params['refresh_token'],
      scope: params['scope'],
      token_type: params['token_type'],
      id_aplicacion: params['id_aplicacion'],
      id_rol: params['id_rol'],
      id_persona: params['id_persona']
    };

    if (token.access_token) {
      this.sessionStorageService.store('sessionUser', token);
    }
  }

  public seleccionarApp() {

    this.service.seleccionarApp(this.model).subscribe((response) => {

      // console.log('response', response);

      if (response.status) {

        this.sessionUser.id_aplicacion = this.model.id_aplicacion;
        this.sessionUser.id_rol = this.model.id_rol;
        this.sessionUser.id_persona = response.id_persona;

        this.sessionStorageService.store('sessionUser', this.sessionUser);

        const params = new URLSearchParams();
        for (const key in this.sessionUser) {
          params.set(key, this.sessionUser[key]);
        }
        // console.log('this.sessionUser', this.sessionUser);
        // console.log('response', response);
        window.location.href = response.aplicacion.url_aplicacion + '?' + params.toString();

      } else {
        this.showError(response.message, 'Respuesta del servicio');
      }

    }, (httpErrorResponse) => {
      console.log(httpErrorResponse.error);
      this.showError(httpErrorResponse.error.message, 'Respuesta del servicio');
    });

  }

  public obtenerRoles(id_aplicacion: number) {
    let url = Urls.ROL_USUARIO_APP_URL.replace('{username}', this.sessionUser.nombre_usuario);
    url = url.replace('{id_application}', id_aplicacion.toString());
    this.commonService.commonGetRestWithParams(url, 'foo=1', true).subscribe((response) => {
      this.rolList = response.records;
      // console.log('this.rolList', this.rolList);
    }, (error) => {
      console.log(error);
      // this.showErrorFast();
    });
  }

  public cerrarSesion() {
    this.oauth2Service.logout();
  }
}
