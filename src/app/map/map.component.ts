import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../common/websocket.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  message = 'adsfaadfasdf';

  constructor(private socket: WebsocketService) { }

  ngOnInit() {
  }

  sendMessage() {
    console.log('clicked', this.message); 
    this.socket.sendMessage('asdfadf');
  }



}
