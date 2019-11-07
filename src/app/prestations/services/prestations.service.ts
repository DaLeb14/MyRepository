import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;


  constructor(private afs: AngularFirestore) {
    // this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>('prestations');

    this.collection = this.itemsCollection.valueChanges().pipe(
      map(tab => tab.map(obj => new Prestation(obj))));

      // equivaut à
      //   map((tab) => {
      //     return tab.map((obj) => {
      //       return new Prestation(obj);
      //     });
      //   })
      // );
  }


  public update(item: Prestation, state: State) {
    console.log(item);
    item.state = state;
    console.log(item);
  }

  // getCollection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }


  // setCollection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }



  // update

  // addItem
  public add(item: Prestation) {
    // this.collection.push(new Prestation(item));
  }

  // delete

  // getItem




}
