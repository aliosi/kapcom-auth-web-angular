import {AbstracCrudComponent} from './abstrac-crud.component';

export class SubModelCrudComponent extends AbstracCrudComponent {

  public sortItems(key, order = 'asc', items: any): any[] {
    return items.sort((a, b): number => {

      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }

      return (order === 'desc') ? (comparison * -1) : comparison;
    });
  }

  public filterItems(array: any[], query: string, propertyKey: string): any {
    if (query) {
      const arrayOutput: any[] = new Array();
      for (const obj of array) {
        for (const key in obj) {
          if (obj[key]) {
            const val = String(obj[key]).toLowerCase();
            if (val.includes(query.toLowerCase())) {
              const itemFinded = this.getItem(val, propertyKey, arrayOutput);
              if (!itemFinded) {
                arrayOutput.push(obj);
              }
            }
          }
        }
      }
      return arrayOutput;
    }
    return array;
  }
}
