import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'cook',
    component: AppComponent,
    loadChildren: () => import('./pages/cook-view/cook-view.module').then(m => m.CookViewModule)
  },
  { path: 'customer',
    component: AppComponent,
    loadChildren: () => import('./pages/customer-view/customer-view.module').then(m => m.CustomerViewModule)
  },
  { path: '',   redirectTo: '/customer', pathMatch: 'full' },
  { path: '**', redirectTo:  '/customer'},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
