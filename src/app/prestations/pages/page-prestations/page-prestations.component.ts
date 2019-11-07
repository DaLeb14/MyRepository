import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';
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
  sub: Subscription;


  constructor(private prestationService: PrestationsService,
    private route: ActivatedRoute) { }




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
      'State'
    ];

    this.labelBtn = 'Ajouter une prestation';
    this.routeBtn = 'add';

    console.log(this.prestationService.collection);
  }

  public update(item: any, event: any) {
    this.prestationService.update(item, event.target.value);
  }


  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
