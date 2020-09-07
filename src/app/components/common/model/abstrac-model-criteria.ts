export class AbstracModelCriteria {
  order_column: String;
  order_direction: String;
  start: Number;
  limit: Number;
  no_paging: Boolean;

  constructor() {
    this.order_column = '1';
    this.order_direction = 'ASC';
    this.start = 0;
    this.limit = 10;
    this.no_paging = false;
  }
}
