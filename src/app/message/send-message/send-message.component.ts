import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messages: Message[];

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messageService.getMessages()
    .pipe(
      map(messageData =>
        {
         let messageArray = new Array();
          for(let message of messageData){
            if(message.whom=='admin'){   console.log("Send component: "+message.message)
              messageArray.push(message);

            }
          }
          return messageArray;
        }
      )
    ).subscribe( data => this.messages = data )
  }

}
