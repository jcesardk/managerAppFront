import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsDetailPage } from './apps-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AppsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsDetailPageRoutingModule {}
