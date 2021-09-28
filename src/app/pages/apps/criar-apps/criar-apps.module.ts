import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CriarAppsPageRoutingModule } from './criar-apps-routing.module';

import { CriarAppsPage } from './criar-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarAppsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CriarAppsPage]
})
export class CriarAppsPageModule {}
