import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMessagesComponent } from '../inbox-module/all-messages/all-messages.component';
import { ChannelsComponent } from '../inbox-module/channels/channels.component';
import { DrafasComponent } from '../inbox-module/drafas/drafas.component';
import { GroupsComponent } from '../inbox-module/groups/groups.component';
import { ImportantComponent } from '../inbox-module/important/important.component';
import { LocationsComponent } from '../inbox-module/locations/locations.component';
import { MediaComponent } from '../inbox-module/media/media.component';
import { TeamsComponent } from '../inbox-module/teams/teams.component';
import { UnreadComponent } from '../inbox-module/unread/unread.component';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: "", component: LayoutComponent },
  { path: 'allMessages', component: AllMessagesComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'drafts', component: DrafasComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'important', component: ImportantComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'unread', component: UnreadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
