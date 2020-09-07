import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ROUTING} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {DatePipe} from '@angular/common';
import {CommonService} from './components/common/service/common.service';
import {NgModule} from '@angular/core';
import {Oauth2Service} from './components/common/service/oauth2.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import {ToastrModule} from 'ngx-toastr';
import {KapcomLabelValidationComponent} from './components/kapcom-label-validation/kapcom-label-validation.component';
import {KapcomAutofocusDirective} from './components/common/directives/kapcom-autofocus.directive';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {LoginComponent} from './components/login/login.component';
import {SeleccionarAppComponent} from './components/seleccionar-app/seleccionar-app.component';
import {LoginService} from './components/login/service/login.service';
import {SeleccionarAppService} from './components/seleccionar-app/service/seleccionar-app.service';
import {HtppAuthInterceptor} from './components/common/interceptor/htpp-auth-interceptor';
import {NgSelectModule} from '@ng-select/ng-select';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SeleccionarAppComponent,
        KapcomAutofocusDirective,
        KapcomLabelValidationComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule, // <-- #2 add to @NgModule imports
        HttpClientModule,
        NgHttpLoaderModule,
        FormsModule,
        NgSelectModule,
        // Register the modules
        BrowserAnimationsModule,
        Ng2Webstorage,
        ToastrModule.forRoot(), // ToastrModule added\
        NgbModule.forRoot(),
        ROUTING,
        // IntlModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger',
            confirmText: 'Si',
            cancelText: 'No',
            cancelButtonType: 'default',
            placement: 'top'
        }),
        SweetAlert2Module.forRoot()
    ],
    providers: [CommonService, Oauth2Service, LoginService, DatePipe, NgbModal, SeleccionarAppService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HtppAuthInterceptor,
            multi: true
        }],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
