import { Component, OnInit } from '@angular/core';
import { VersionServiceService } from 'src/app/shared/services/version-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  public title = 'test';
  public version$: BehaviorSubject<number>;


  constructor(private vs: VersionServiceService) {
    // this.title2 = "test";
  }

  ngOnInit() {

    this.version$ = this.vs.version$;
  }

}
