import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnisearchPage } from './unisearch.page';

const routes: Routes = [
  {
    path: '',
    component: UnisearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnisearchPageRoutingModule {}
