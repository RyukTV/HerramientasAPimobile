import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnisearchPageRoutingModule } from './unisearch-routing.module';

import { UnisearchPage } from './unisearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnisearchPageRoutingModule
  ],
  declarations: [UnisearchPage]
})
export class UnisearchPageModule {}
