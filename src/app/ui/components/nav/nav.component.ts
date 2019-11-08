import { Component, OnInit } from '@angular/core';
import { VersionServiceService } from 'src/app/shared/services/version-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public version$: BehaviorSubject<number>;


  constructor(private vs: VersionServiceService) {
    // this.title2 = "test";
  }

  ngOnInit() {

    this.version$ = this.vs.version$;
  }

  public upgradeVersion()
  {
    this.vs.upgrade();

  }

}
