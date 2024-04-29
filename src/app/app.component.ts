import { Component } from '@angular/core';
import {DataService} from './core/shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'cwk-meal-system';

  constructor(private dataService: DataService) {
    this.dataService.createData();
  }
}
