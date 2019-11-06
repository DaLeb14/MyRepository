import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Prestation[];

  constructor() {

    this.collection = fakePrestations;
  }

  //getCollection
  public get collection() {
    return this.pCollection;
  }


  //setCollection
  public set collection(col: Prestation[]) {
    this.pCollection = col;
  }



  //update

  //addItem

  //delete

  //getItem




}
