import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTACTS } from '../contactDB';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public getContact(): Observable<Contact[]> {
    return of(CONTACTS);
  };

}
