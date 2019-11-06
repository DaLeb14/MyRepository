import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Prestation[];

  constructor() {

    this.collection = fakePrestations;
  }


public update(item: Prestation, state: State)
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
  public set collection(col: Prestation[]) {
    this.pCollection = col;
  }



  // update

  // addItem

  // delete

  // getItem




}
