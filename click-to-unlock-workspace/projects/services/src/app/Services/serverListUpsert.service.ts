import { LoggerService } from './logger.service';
// import { Server } from './../models/server.model';
import { Injectable } from '@angular/core';
import { Server } from '../models/server.model';

@Injectable()
export class ServerServices {
  constructor(private LoggerService: LoggerService) {}
  ServerList: Server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];

  AddServer({ name, status }: { name: string; status: string }) {
    this.ServerList.push({
      id: this.ServerList.length + 1,
      name: name,
      status: status,
    });
    this.LoggerService.logStatusChange(status);
  }

  ChangeServerStatus({ id, status }: { id: number; status: string }) {
    this.ServerList[id].status = status;
    this.LoggerService.logStatusChange(status);
  }


  DeleteServer({ id }: { id: number }) {
    this.ServerList.splice(id, 1);
  }
}
