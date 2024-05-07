import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/shared/data.service';
import {timer} from 'rxjs';
import {MealStatus} from '../../core/model/MealStatus';
import {MealCard} from '../../core/model/MealCard';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  inPreparationData: Array<MealCard> = new Array<MealCard>();
  readyToFetchData: Array<MealCard> = new Array<MealCard>();

  showVideo: boolean = false;
  menuBackgroundColor: string = '#e4e4e4';
  videoBackgroundColor: string = '#010101';
  menuContainerBackgroundColor: string = this.menuBackgroundColor;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    timer(0, 1000).subscribe((): void => {
      let data: Array<MealCard> = this.dataService.getData();
      this.inPreparationData = data.filter((d: MealCard): boolean => d.status === MealStatus.IN_PREPARATION);
      this.readyToFetchData = data.filter((d: MealCard): boolean => d.status === MealStatus.READY_TO_FETCH);
      if (this.inPreparationData.length > 0 || this.readyToFetchData.length > 0) {
        this.menuContainerBackgroundColor = this.menuBackgroundColor;
        this.showVideo = false;
      }
    });

    timer(10000, 10000).subscribe((): void => {
      if (this.inPreparationData.length === 0 && this.readyToFetchData.length === 0) {
        this.menuContainerBackgroundColor = this.videoBackgroundColor;
        this.showVideo = true;
      }
    });
  }
}
