import { Injectable } from '@angular/core';
import { WebSocketSubject } from "rxjs/webSocket";


/*
    next() - will trigger a send event to server
    subscribe() - will be emitted on receiving a message from server
*/

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  // chatURL: string = "ws://echo.websocket.org/";
  chatURL: string = "ws://localhost:8080";
  subject$ ;
  messages: string[] = ['hi', 'bye']
  constructor() { 
    this.subject$ = new WebSocketSubject('ws://localhost:8080');
    this.subject$.subscribe(
      (data) => this.messages.push(data.message),
      (err) => console.error(err),
      () => console.warn('Completed!')
      );
  }
  // this.messages.push(message)
  
  sendMessage(text) {
    this.subject$.next({message: text});
  }
}
