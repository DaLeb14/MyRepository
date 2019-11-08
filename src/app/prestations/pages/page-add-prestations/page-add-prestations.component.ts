import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-add-prestations',
  templateUrl: './page-add-prestations.component.html',
  styleUrls: ['./page-add-prestations.component.scss']
})

export class PageAddPrestationsComponent implements OnInit {

  constructor(private prestationService: PrestationsService, private route: ActivatedRoute, private router: Router) {


  }

  public title: string;
  public label: string;

  ngOnInit() {

    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });


    // this.title = 'Ajout de prestations';
    // this.label = 'yyyy';
  }

  public add(item: Prestation) {
    console.log(item);
    this.prestationService.add(item).then((res) =>{
      //res = reponse de l'api
    });
    // this.router.navigate(['prestations']);
    // redirection relactive par rapport à la route
    this.router.navigate(['../'], { relativeTo: this.route });
  }


}
