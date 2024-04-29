import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookViewRoutingModule } from './cook-view-routing.module';
import { CookViewComponent } from './cook-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CookViewComponent
  ],
    imports: [
        CommonModule,
        CookViewRoutingModule,
        MatGridListModule,
        MatCardModule
    ]
})
export class CookViewModule { }
