import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'online';
  serverCreationStatus = 'No Server Created';
  allowNewServer = true;

  constructor() {}

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}