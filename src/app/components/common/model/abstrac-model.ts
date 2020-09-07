export class AbstracModel {

  id_estado: Number;
  descrip_estado: string;
  fecha_registro: string;
  fecha_modificacion: string;
  id_usuario_registro: Number;
  id_usuario_modificacion: Number;
  pc_registro: string;
  pc_modificacion: string;
  flag_removed: Number;

  rowNum: number;
  newEntry = false;
  updatedRecord = false;
  removedRecord = false;

  newFile = false;
  fileName: string;
  contentType: string;
}
