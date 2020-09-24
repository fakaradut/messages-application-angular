import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/core/models/contact';
import { MessageService } from 'src/app/core/services/message.service';
import { map, retry } from 'rxjs/operators';
import { Message } from '../../core/models/message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-online-contact',
  templateUrl: './online-contact.component.html',
  styleUrls: ['./online-contact.component.css']
})
export class OnlineContactComponent implements OnInit {

  @Input()
  contact: Contact;

  @Output()
  changeContact= new EventEmitter() ;

  message:Message;
  messageThumb:string;

  constructor(
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
     this.messageService.getMessages()
     .pipe(
       map(messageData =>{
         for(let data of messageData){
           if(data['whom'] == this.contact.name){
             if(data.message.length > 35){
               this.messageThumb = data.message.substring(0,32)+"...";
             }else{
               this.messageThumb = data.message;
             }
             return data;
           }
         }
       } )
     )
    .subscribe(data=>{this.message = data;console.log('+')});
  }

  public clicked(){
    console.log("Clicked contact: "+this.contact.name);
    this.changeContact.emit(this.contact);
  }

}
