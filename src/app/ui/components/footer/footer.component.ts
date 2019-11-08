import { Component, OnInit } from '@angular/core';
import { VersionServiceService } from 'src/app/shared/services/version-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {

  public version$: BehaviorSubject<number>;


  constructor(private vs: VersionServiceService) {
    // this.title2 = "test";
  }

  ngOnInit() {

    this.version$ = this.vs.version$;
  }


}
