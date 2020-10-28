import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {

  username = '';
  servers = ['asian', 'australian'];

  onAddServer(){
    this.servers.push(this.username);
  }



}
