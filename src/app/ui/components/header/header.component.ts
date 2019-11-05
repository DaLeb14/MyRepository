import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  public title = 'test';
  public title2: string;

  constructor() {
    // this.title2 = "test";
  }

  ngOnInit() {


  }

}
