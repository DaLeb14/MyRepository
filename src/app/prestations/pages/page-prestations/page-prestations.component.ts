import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public headers: string[];
  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  // public states =  Object.values(State);
  public states = State;
  public title: string;
  public label: string;
  public labelBtn: string;
  public routeBtn: string;
  public routeActionEdit: string;
  sub: Subscription;

  constructor(private prestationService: PrestationsService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection;
    // this.sub = this.prestationService.collection.subscribe( (data) => { this.collection = data } );


    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });


    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
      'Actions'
    ];

    this.labelBtn = 'Ajouter une prestation';
    this.routeBtn = 'add';

    console.log(this.prestationService.collection);
  }

  public update(item: any, event: any) {
    this.prestationService.update(item, event.target.value).then((res) => {
      //reponse de l'api
      item.state = event.target.value;
    });

    // subscribe obligatoire pour que la requete soit exectuée !!!
    /*this.prestationService.update(item, event.target.value).subscribe((res) => {
      //reponse de l'api
      item.state = event.target.value;
    });*/

  }

  // public doAction(action: string, item: Prestation)
  // {
  //   if (action === 'delete')
  //   {
  //     console.log('action === delete');
  //     this.prestationService.delete(item);
  //   }

  //   if (action === 'edit') {
  //     console.log('action === edit');
  //     this.router.navigate(['prestations/edit', item.id]);
  //     // this.router.navigate(['prestations/edit', item.id]).edit(item);
  //   }

  // }

  public doEdit(test:string, item: Prestation)
  {
      console.log('edit');
      this.router.navigate(['prestations/edit', item.id]);
      // this.router.navigate(['prestations/edit', item.id]).edit(item);
  }


  public doDelete(item: Prestation)
  {
      console.log('delete');
      this.prestationService.delete(item);
  }



  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
