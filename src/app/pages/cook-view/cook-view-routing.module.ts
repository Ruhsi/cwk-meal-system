import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookViewComponent} from './cook-view.component';

const routes: Routes = [
  {
    path: '',
    component: CookViewComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookViewRoutingModule {
}
