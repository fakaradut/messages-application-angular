import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { IncomingMessageComponent } from './incoming-message/incoming-message.component';
import { SendMessageComponent } from './send-message/send-message.component';


@NgModule({
  declarations: [
    IncomingMessageComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule
  ],
  exports:[
    IncomingMessageComponent,
    SendMessageComponent
  ]
})
export class MessageModule { }
