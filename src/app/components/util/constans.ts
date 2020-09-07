import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export class Urls {

  public static OAUTH2_GET_TOKEN = environment.URL_MAIN_BACKEND + 'oauth/token';

  public static APP_USUARIO_URL = environment.URL_MAIN_BACKEND + 'api/v1.0/auth/applications/{username}/';
  public static ROL_USUARIO_APP_URL = environment.URL_MAIN_BACKEND + 'api/v1.0/auth/roles/{id_application}/{username}/';
  public static SELECCIONAR_APP_URL = environment.URL_MAIN_BACKEND + 'api/v1.0/auth/select-app/';
  public static RECUPERAR_CLAVE_URL = environment.URL_MAIN_BACKEND + 'api/v1.0/auth/recovery-password/';
  public static REGISTRAR_PERSONA = environment.URL_MAIN_BACKEND + 'api/v1.0/auth/sign-up/';

  public static CATALOGO_URL = environment.URL_MODULE_BACKEND_COMMON + 'api/v1.0/catalogo/itemsPorCatalogo/';

  public static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
}
