import { Component } from '@angular/core';
import { Server } from '../models/server.model';
import { ServerServices } from '../Services/serverListUpsert.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {

  constructor(private ServerServices:ServerServices) { }
  servers:Server[]= this.ServerServices.ServerList;

  DeleteServer(id:number){
    this.ServerServices.DeleteServer({id});
  }
  UpdateServerStatus(id:number,status:string){
    this.ServerServices.ChangeServerStatus({id,status});
  }
}
