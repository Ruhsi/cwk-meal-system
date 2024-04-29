import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/shared/data.service';
import {map, Observable, timer} from 'rxjs';
import {MealStatus} from '../../core/model/MealStatus';
import {MealCard} from '../../core/model/MealCard';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  inPreparationData: Array<MealCard> = new Array<MealCard>();
  readyToFetchData: Array<MealCard> = new Array<MealCard>();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
        let data: Array<MealCard> = this.dataService.getData();
        this.inPreparationData = data.filter(d => d.status === MealStatus.IN_PREPARATION);
        this.readyToFetchData = data.filter(d => d.status === MealStatus.READY_TO_FETCH);
      });
  }
}
