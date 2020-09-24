import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input()
  contact:Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
