import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriaUserPageRoutingModule } from './cria-user-routing.module';

import { CriaUserPage } from './cria-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CriaUserPageRoutingModule
  ],
  declarations: [CriaUserPage]
})
export class CriaUserPageModule {}
