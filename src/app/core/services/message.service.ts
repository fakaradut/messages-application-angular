import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../models/message';
import { MESSAGES } from '../messageDB';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public getMessages(): Observable<Message[]> {
    return of(MESSAGES);
  }

}
