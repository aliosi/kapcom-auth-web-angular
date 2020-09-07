import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../common/service/common.service';
import {LoginService} from './service/login.service';
import {LoginModel} from './model/login-model';
import {RecuperarClaveModel} from './model/recuperar-clave.model';
import {Oauth2Service} from '../common/service/oauth2.service';
import {SessionStorageService} from 'ngx-webstorage';
import {RegistroPersonaModel} from './model/registro-persona-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainModelCrudComponent} from '../common/component/main-model-crud.component';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent extends MainModelCrudComponent implements OnInit {

    public formLogin: FormGroup;
    public formRegistro: FormGroup;
    public formRecuperarClave: FormGroup;

    public loginModel: LoginModel;
    public recuperarClaveModel: RecuperarClaveModel;
    public registroPersonaModel: RegistroPersonaModel;
    public flagFormLogin: boolean;
    public flagFormRecuperarClave: boolean;
    public flagFormRegistro: boolean;

    public tipoDocumentoList: any[];

    constructor(public toastr: ToastrService, private _rotuer: Router, private service: LoginService, private commonService: CommonService, private oauth2Service: Oauth2Service, private sessionStorageService: SessionStorageService, private fb: FormBuilder) {
        super(toastr);
    }

    ngOnInit() {
        this.sessionStorageService.clear('sessionUser');
        this.showFormLogin();
    }

    public loadDataSources() {
        {
            this.commonService.obtenerItemsPorCatalogo('TIPO_DOCUMENTO_IDENTIDAD').subscribe((response) => {
                this.tipoDocumentoList = response.records;
            }, (error) => {
                console.log(error);
            });
        }
    }

    public showFormRegistro() {

        this.loadDataSources();

        this.formRegistro = this.fb.group({ // <-- the parent FormGroup
            id_tipo_documento: [null, Validators.required],
            numero_documento: [null, [Validators.required, Validators.maxLength(50)]],
            nombres: [null, [Validators.required, Validators.maxLength(70)]],
            ape_pater: [null, [Validators.required, Validators.maxLength(70)]],
            ape_mater: [null, [Validators.required, Validators.maxLength(70)]],
            email: [null, [Validators.required, Validators.maxLength(50), Validators.email]],
            nombre_usuario: [null, [Validators.required, Validators.maxLength(50)]]
        });

        this.registroPersonaModel = new RegistroPersonaModel();
        this.flagFormRegistro = true;
        this.flagFormRecuperarClave = false;
        this.flagFormLogin = false;
    }

    public showFormRecuperarClave() {
        this.loadDataSources();
        this.formRecuperarClave = this.fb.group({ // <-- the parent FormGroup
            id_tipo_documento: [null, Validators.required],
            numero_documento: [null, [Validators.required, Validators.maxLength(50)]],
            nombre_usuario: [null, [Validators.required, Validators.maxLength(50)]]
        });

        this.recuperarClaveModel = new RecuperarClaveModel();
        this.flagFormLogin = false;
        this.flagFormRecuperarClave = true;
        this.flagFormRegistro = false;
    }

    public showFormLogin() {

        this.formLogin = this.fb.group({ // <-- the parent FormGroup
            nombre_usuario: [null, Validators.required],
            clave_usuario: [null, Validators.required]
        });

        this.loginModel = new LoginModel();
        this.flagFormLogin = true;
        this.flagFormRecuperarClave = false;
        this.flagFormRegistro = false;
    }

    public recuperarClave() {

        this.recuperarClaveModel = Object.assign(this.recuperarClaveModel, this.formRecuperarClave.value);

        this.service.recuperarClave(this.recuperarClaveModel).subscribe((response) => {

            console.log('response', response);

            if (response.status) {
                this.recuperarClaveModel = new RecuperarClaveModel();
                this.showSuccess('Nueva clave enviada al correo.', 'Estado de Operación');
            } else {
                this.showError(response.message, 'Estado de Operación');
            }

        }, (httpErrorResponse) => {
            console.log(httpErrorResponse.error);
            this.showError(httpErrorResponse.error.message, 'Respuesta del servicio');
        });

    }

    public registrarPersona() {

        this.registroPersonaModel = Object.assign(this.registroPersonaModel, this.formRegistro.value);

        this.service.registrarPersona(this.registroPersonaModel).subscribe((response) => {

            console.log('response', response);

            if (response.status) {
                this.registroPersonaModel = new RegistroPersonaModel();
                this.showSuccess('Registro exitoso, se enviara a tu correo tu clave de acceso.', 'Estado de Operación');
            } else {
                this.showError(response.message, 'Estado de Operación');
            }

        }, (httpErrorResponse) => {
            console.log(httpErrorResponse.error);
            this.showError(httpErrorResponse.error.message, 'Respuesta del servicio');
        });

    }

    public login() {
        this.oauth2Service.obtainAccessToken(this.loginModel);
    }
}
