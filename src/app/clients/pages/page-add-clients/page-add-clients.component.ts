import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit {

  constructor() { }

  public title: string;
  public label: string;

  ngOnInit() {
    this.title = 'Page ajout Client';
    this.label = 'Ajouter un client';

    // this.route.data.subscribe((donnees) => {
    //   this.title = donnees.title;
    //   this.label = donnees.label;
    //});

  }

}
