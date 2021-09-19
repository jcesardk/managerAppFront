import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsPage } from './apps.page';

const routes: Routes = [
  {
    path: '',
    component: AppsPage
  },
  {
    path: 'apps-detail',
    loadChildren: () => import('./apps-detail/apps-detail.module').then( m => m.AppsDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsPageRoutingModule {}
