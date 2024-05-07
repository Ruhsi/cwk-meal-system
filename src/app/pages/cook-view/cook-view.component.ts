import {Component, OnInit} from '@angular/core';
import {MealCard} from '../../core/model/MealCard';
import {MealStatus} from '../../core/model/MealStatus';
import {DataService} from '../../core/shared/data.service';
import {MealColor} from '../../core/model/MealColor';

@Component({
  selector: 'app-cook-view',
  templateUrl: './cook-view.component.html',
  styleUrls: ['./cook-view.component.scss']
})
export class CookViewComponent implements OnInit {

  sortOrder: Array<string> = [MealStatus.IN_PREPARATION, MealStatus.READY_TO_FETCH, MealStatus.IDLE, MealStatus.DONE];

  mealCardData: Array<MealCard> = new Array<MealCard>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.fetchAndSortData();
  }

  onMealCardClick(mealCard: MealCard) {
    if (mealCard.status === MealStatus.IDLE) {
      mealCard.status = MealStatus.IN_PREPARATION;
    } else if (mealCard.status === MealStatus.IN_PREPARATION) {
      mealCard.status = MealStatus.READY_TO_FETCH;
    } else if (mealCard.status === MealStatus.READY_TO_FETCH) {
      mealCard.status = MealStatus.DONE;
    } else if (mealCard.status === MealStatus.DONE) {
      mealCard.status = MealStatus.IDLE;
    }

    this.mealCardData.sort((a, b) => {
      const diff = this.sortOrder.indexOf(a.status) - this.sortOrder.indexOf(b.status);
      if(diff) return diff;
      return a.name - b.name;
    });

    this.dataService.setData(this.mealCardData)
  }

  getCardsByColorSorted(color: MealColor) {
    let mealCards = this.mealCardData.filter(mealCard => mealCard.color == color)
    mealCards.sort((a, b) => this.sortOrder.indexOf(a.status) - this.sortOrder.indexOf(b.status));
    let inPreparation = mealCards.filter(mealCard => mealCard.status == MealStatus.IN_PREPARATION);
    let readyToFetch = mealCards.filter(mealCard => mealCard.status == MealStatus.READY_TO_FETCH);
    let idle = mealCards.filter(mealCard => mealCard.status == MealStatus.IDLE).slice(0, 7);
    let done = mealCards.filter(mealCard => mealCard.status == MealStatus.DONE).slice(0, 3);
    mealCards = inPreparation.concat(readyToFetch, idle, done);

    return mealCards;
  }

  resetValues(value: number, color: MealColor) {
    if(value >= 0) {
      this.dataService.resetValues(value, color);
      this.fetchAndSortData();
    }
  }

  private fetchAndSortData() {
    this.mealCardData = this.dataService.getData()
      .sort((a, b) => this.sortOrder.indexOf(a.status) - this.sortOrder.indexOf(b.status));
  }

  protected readonly MealStatus = MealStatus;
  protected readonly MealColor = MealColor;
  protected readonly Object = Object;
  protected readonly Number = Number;
}
