import {AbstracModel} from '../../common/model/abstrac-model';

export class RegistroPersonaModel  extends AbstracModel {
  id_tipo_documento: number;
  numero_documento: string;
  nombres: string;
  ape_pater: string;
  ape_mater: string;
  email: string;
  nombre_usuario: string;
}
