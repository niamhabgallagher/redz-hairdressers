import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetStylistsPage } from './meet-stylists.page';

const routes: Routes = [
  {
    path: '',
    component: MeetStylistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetStylistsPageRoutingModule {}
