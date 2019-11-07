import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() href: string;
  @Input() label: string;
  @Input() route: string;

  constructor() {

}

  ngOnInit() {
  }

}
