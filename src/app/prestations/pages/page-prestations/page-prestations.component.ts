import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';


@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public headers: string[];
  public collection: Prestation[];
  // public states =  Object.values(State);
  public states =  State;

  constructor(private prestationService: PrestationsService) { }




  ngOnInit() {
  this.collection = this.prestationService.collection;

  this.headers = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'Total HT',
    'Total TTC',
    'State'
  ];

  console.log(this.prestationService.collection);
}

  public update(item: any, event:any)
  {
    this.prestationService.update(item, event.target.value);
  }




}
