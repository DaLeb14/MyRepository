import { Injectable } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client';
import { FakeClients } from './fake-clients';

@Injectable({
  providedIn: 'root'
})

export class ClientsService  {

  private pCollection: Client[];

  constructor() {

    this.collection = FakeClients;
  }


public update(item: Client, state: ClientState)
{
  console.log(item);
  item.state = state;
  console.log(item);
}

  // getCollection
  public get collection() {
    return this.pCollection;
  }


  // setCollection
  public set collection(col: Client[]) {
    this.pCollection = col;
  }



  // update

  // addItem

  // delete

  // getItem




}

