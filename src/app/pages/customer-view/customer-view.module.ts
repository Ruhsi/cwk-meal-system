import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {CustomerViewRoutingModule} from './customer-view-routing.module';
import {CustomerViewComponent} from './customer-view.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBurger, faCheckSquare, faHand, faSquare} from '@fortawesome/free-solid-svg-icons';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CustomerViewComponent
  ],
    imports: [
        CommonModule,
        CustomerViewRoutingModule,
        NgOptimizedImage,
        FontAwesomeModule,
        MatGridListModule
    ]
})
export class CustomerViewModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      faBurger,
      faHand
    );
  }
}
