import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriaUserPage } from './cria-user.page';

const routes: Routes = [
  {
    path: '',
    component: CriaUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriaUserPageRoutingModule {}
