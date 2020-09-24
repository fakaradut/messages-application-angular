import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';



@NgModule({
  declarations: [
    OnlineContactComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports: [
    OnlineContactComponent,
    ContactInfoComponent
  ]
})
export class ContactModule { }
