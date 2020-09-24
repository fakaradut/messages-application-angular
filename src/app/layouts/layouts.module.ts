import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ContactModule } from '../contact/contact.module';
import { MessageModule } from '../message/message.module';
import { InboxModuleModule } from '../inbox-module/inbox-module.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ContactModule,
    MessageModule,
    InboxModuleModule
  ]
})
export class LayoutsModule { }
