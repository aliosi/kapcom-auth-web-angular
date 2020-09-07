import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {LoginComponent} from './components/login/login.component';
import {SeleccionarAppComponent} from './components/seleccionar-app/seleccionar-app.component';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'seleccionar-app', component: SeleccionarAppComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {useHash: true});
