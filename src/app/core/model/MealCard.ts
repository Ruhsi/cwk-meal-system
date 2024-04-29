import {MealStatus} from './MealStatus';
import {MealColor} from './MealColor';

export class MealCard {
  name: number;
  status: MealStatus;
  color: MealColor;

  public constructor(name: number, status: MealStatus, color: MealColor) {
    this.name = name;
    this.status = status;
    this.color = color;
  }
}
