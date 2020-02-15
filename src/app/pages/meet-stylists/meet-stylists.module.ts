import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetStylistsPageRoutingModule } from './meet-stylists-routing.module';

import { MeetStylistsPage } from './meet-stylists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetStylistsPageRoutingModule
  ],
  declarations: [MeetStylistsPage]
})
export class MeetStylistsPageModule {}
