import { Message } from '../../core/models/message';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/core/models/contact';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-incoming-message',
  templateUrl: './incoming-message.component.html',
  styleUrls: ['./incoming-message.component.css']
})
export class IncomingMessageComponent implements OnChanges {

  @Input()
  contact: Contact;

  messages:Message[];

  constructor(
    private messageService: MessageService
  ) { }

  ngOnChanges(): void {
    this.messages = null;
    console.log('HELLO WORLD!')
    this.messageService.getMessages()
    .pipe(
      map(
      messagesData =>{
       let messageArray = new Array();

        for(let message of messagesData  ){
          if(message['whom'] == this.contact.name && message.toWho=='admin'){
            console.log(message.message)
            messageArray.push (message);
          }
        }
        console.log("This is the array's message"+messageArray[0]['message'])
        return messageArray;
      }
    )).subscribe(
      message => {this.messages = message;
       console.log(message)},
       error => console.log(error) )

      }


}
