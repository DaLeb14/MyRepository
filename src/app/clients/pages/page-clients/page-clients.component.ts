import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { ClientState } from 'src/app/shared/enums/client-state.enum';


@Component({
    selector: 'app-page-clients',
    templateUrl: './page-clients.component.html',
    styleUrls: ['./page-clients.component.scss']
  })

export class PageClientsComponent implements OnInit {
  public headers: string[];
  public collection: Client[];
  // public states =  Object.values(State);
  public states = ClientState;
  public title: string;
  public label: string;
  public labelBtn: string;
  public routeBtn: string;

  constructor(private clientsService: ClientsService) { }




  ngOnInit() {
    this.collection = this.clientsService.collection;

    this.headers = [
      'Name',
      'Email',
      'State'
    ];

    this.title = 'Clients';
    this.label = 'Tous les clients';
    this.labelBtn = 'Ajouter un client';
    this.routeBtn = 'add';

    console.log(this.clientsService.collection);

  }

  public update(item: any, event: any) {
    this.clientsService.update(item, event.target.value);
  }




}
