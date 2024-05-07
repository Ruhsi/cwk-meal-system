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
      this.createRedMealCard(97, 100),
      this.createRedMealCard(276, 300),
      this.createRedMealCard(301, 400),
      this.createRedMealCard(401, 500),
      this.createRedMealCard(501, 600),
      this.createRedMealCard(601, 700),
      this.createRedMealCard(701, 800),
      this.createRedMealCard(801, 900),
      this.createRedMealCard(901, 1000)
    );

    mealCards = mealCards.concat(
      this.createYellowMealCard(12, 100),
      this.createYellowMealCard(101, 200),
      this.createYellowMealCard(366, 400),
      this.createYellowMealCard(643, 700),
      this.createYellowMealCard(701, 800),
      this.createYellowMealCard(801, 900),
      this.createYellowMealCard(901, 1000)
    );

    mealCards = mealCards.concat(
      this.createGreenMealCard(255, 300),
      this.createGreenMealCard(385, 400),
      this.createGreenMealCard(413, 500),
      this.createGreenMealCard(501, 600),
      this.createGreenMealCard(650, 700),
      this.createGreenMealCard(780, 800)
    );

    mealCards = mealCards.concat(
      this.createBlueMealCard(149, 200),
      this.createBlueMealCard(201, 300),
      this.createBlueMealCard(301, 400),
      this.createBlueMealCard(401, 500),
      this.createBlueMealCard(501, 600),
      this.createBlueMealCard(601, 700),
      this.createBlueMealCard(701, 800),
      this.createBlueMealCard(801, 900),
      this.createBlueMealCard(901, 1000)
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
    this.setData(mealCards.sort((a, b) => a.name - b.name));
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
