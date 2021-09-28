import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsPage } from './apps.page';

const routes: Routes = [
  {
    path: '',
    component: AppsPage
  },
  {
    path: 'apps-detail/:id',
    loadChildren: () => import('./apps-detail/apps-detail.module').then( m => m.AppsDetailPageModule)
  },
  {
    path: 'criar-apps',
    loadChildren: () => import('./criar-apps/criar-apps.module').then( m => m.CriarAppsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsPageRoutingModule {}
