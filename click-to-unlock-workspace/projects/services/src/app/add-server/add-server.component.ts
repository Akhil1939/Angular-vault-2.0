import { ServerServices } from './../Services/serverListUpsert.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {

  constructor(private ServerServices:ServerServices) { }
  AddServer( name: string, status: string ) {
    this.ServerServices.AddServer({ name, status });
  }
}
