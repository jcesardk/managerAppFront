import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppsDetailPageRoutingModule } from './apps-detail-routing.module';

import { AppsDetailPage } from './apps-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppsDetailPageRoutingModule
  ],
  declarations: [AppsDetailPage]
})
export class AppsDetailPageModule {}
