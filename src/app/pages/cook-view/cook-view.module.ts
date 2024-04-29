import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookViewRoutingModule } from './cook-view-routing.module';
import { CookViewComponent } from './cook-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CookViewComponent
  ],
  imports: [
    CommonModule,
    CookViewRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CookViewModule { }
