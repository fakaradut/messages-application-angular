import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxModuleRoutingModule } from './inbox-module-routing.module';
import { AllMessagesComponent } from './all-messages/all-messages.component';
import { ImportantComponent } from './important/important.component';
import { DrafasComponent } from './drafas/drafas.component';
import { TeamsComponent } from './teams/teams.component';
import { GroupsComponent } from './groups/groups.component';
import { ChannelsComponent } from './channels/channels.component';
import { LocationsComponent } from './locations/locations.component';
import { UnreadComponent } from './unread/unread.component';
import { MediaComponent } from './media/media.component';


@NgModule({
  declarations: [AllMessagesComponent, ImportantComponent, DrafasComponent, TeamsComponent, GroupsComponent, ChannelsComponent, LocationsComponent, UnreadComponent, MediaComponent],
  imports: [
    CommonModule,
    InboxModuleRoutingModule
  ]
})
export class InboxModuleModule { }
