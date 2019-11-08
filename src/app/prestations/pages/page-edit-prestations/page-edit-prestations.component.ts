import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PrestationsService } from '../../services/prestations.service';



@Component({
  selector: 'app-page-edit-prestations',
  templateUrl: './page-edit-prestations.component.html',
  styleUrls: ['./page-edit-prestations.component.scss']
})
export class PageEditPrestationsComponent implements OnInit {


  public title:string;



  constructor( PrestationsService: PrestationsService, route: ActivatedRoute, router:Router) {}

  ngOnInit() {

//this.route.date.subscribe(
 // (donnee)=>
  //this.title[Symbol]..)
//);


   /* this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );*/
  }

}
