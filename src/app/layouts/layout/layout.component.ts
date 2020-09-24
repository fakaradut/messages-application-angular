import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../core/services/contact.service';
import { Contact } from '../../core/models/contact';
import { Observable } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  contact:Contact;
  clickedContact:Contact;
  clickedMediaWhatsapp:boolean =true ;
  clickedMediaMessenger:boolean ;
  clickedMediaPhone:boolean ;
  clickedMediaSkype:boolean ;
  clickedMediaN:boolean ;

  constructor(
    private contactService: ContactService
  ) { }

  contacts$: Observable<Contact[]>;

  ngOnInit(): void {
     this.contacts$ =this.contactService.getContact();

  }

  clicked(data){
    this.clickedContact = data;
  }

  isContactChanged():boolean{
    if(this.clickedContact.name===this.contact.name){
      return false;
    }
    return true;
  }

  whatsappClicked(){
    this.clickedMediaWhatsapp=true;
    this.clickedMediaMessenger=false;
    this.clickedMediaPhone = false;
    this.clickedMediaSkype=false;
    this.clickedMediaN=false;
  }

  messengerClicked(){
    this.clickedMediaWhatsapp=false;
    this.clickedMediaMessenger=true;
    this.clickedMediaPhone = false;
    this.clickedMediaSkype=false;
    this.clickedMediaN=false;
  }

  phoneClicked(){
    this.clickedMediaWhatsapp=false;
    this.clickedMediaMessenger=false;
    this.clickedMediaPhone = true;
    this.clickedMediaSkype=false;
    this.clickedMediaN=false;
  }

  skypeClicked(){
    this.clickedMediaWhatsapp=false;
    this.clickedMediaMessenger=false;
    this.clickedMediaPhone = false;
    this.clickedMediaSkype=true;
    this.clickedMediaN=false;
  }

  nClicked(){
    this.clickedMediaWhatsapp=false;
    this.clickedMediaMessenger=false;
    this.clickedMediaPhone = false;
    this.clickedMediaSkype=false;
    this.clickedMediaN=true;
  }
}
