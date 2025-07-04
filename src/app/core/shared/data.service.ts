import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MealCard} from '../model/MealCard';
import {MealStatus} from '../model/MealStatus';
import {MealColor} from '../model/MealColor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public setData(data: Array<MealCard>):void {
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(data));
  }

  public getData(): Array<MealCard> {
    return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')!) : new Array<MealCard>();
  }

  public createData(){
    if(this.getData().length > 0) return;

    let mealCards = new Array<MealCard>();

    mealCards = mealCards.concat(
      this.createRedMealCard(401, 500),
      this.createRedMealCard(701, 800),
      this.createRedMealCard(801, 900),
      this.createRedMealCard(901, 1000)
    );

    mealCards = mealCards.concat(
      this.createGreenMealCard(385, 400),
      this.createGreenMealCard(413, 500),
      this.createGreenMealCard(501, 600),
      this.createGreenMealCard(650, 700)
    );

    mealCards = mealCards.concat(
      this.createBlueMealCard(165, 200),
      this.createBlueMealCard(201, 300),
      this.createBlueMealCard(401, 500),
      this.createBlueMealCard(501, 600),
      this.createBlueMealCard(601, 700),
      this.createBlueMealCard(701, 800),
      this.createBlueMealCard(974, 1000)
    );

    this.setData(mealCards);
  }

  public resetValues(value: number, color: MealColor) {
    let mealCards = this.getData();
    mealCards = mealCards.map(mealCard => {
      if(mealCard.color === color && mealCard.name >= value){
        mealCard.status = MealStatus.IDLE;
      } else if(mealCard.color === color && mealCard.name < value){
        mealCard.status = MealStatus.DONE;
      }
      return mealCard;
    });
    let data = mealCards.sort((a, b) => a.name - b.name);
    this.setData(data);
  }

  private createBlueMealCard(from: number, to: number): Array<MealCard> {
    const mealCards = new Array<MealCard>();
    for (let i = from; i <= to; i++){
      mealCards.push(this.createMealCard(i, MealColor.BLUE));
    }

    return mealCards;
  }

  private createRedMealCard(from: number, to: number): Array<MealCard> {
    const mealCards = new Array<MealCard>();
    for (let i = from; i <= to; i++){
      mealCards.push(this.createMealCard(i, MealColor.RED));
    }

    return mealCards;
  }

  private createYellowMealCard(from: number, to: number): Array<MealCard> {
    const mealCards = new Array<MealCard>();
    for (let i = from; i <= to; i++){
      mealCards.push(this.createMealCard(i, MealColor.YELLOW));
    }

    return mealCards;
  }

  private createGreenMealCard(from: number, to: number): Array<MealCard> {
    const mealCards = new Array<MealCard>();
    for (let i = from; i <= to; i++){
      mealCards.push(this.createMealCard(i, MealColor.GREEN));
    }

    return mealCards;
  }

  private createMealCard(name: number, color: MealColor): MealCard {
    return new MealCard(name, MealStatus.IDLE, color);
  }
}
