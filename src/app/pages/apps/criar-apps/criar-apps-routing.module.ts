import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarAppsPage } from './criar-apps.page';

const routes: Routes = [
  {
    path: '',
    component: CriarAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarAppsPageRoutingModule {}
