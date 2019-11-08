import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-btn-actions',
  templateUrl: './btn-actions.component.html',
  styleUrls: ['./btn-actions.component.scss']
})
export class BtnActionsComponent implements OnInit {

  public faEdit = faEdit;
  public faTrash = faTrash;


  @Output() doDelete$: EventEmitter<any> = new EventEmitter();
  @Output() doEdit$: EventEmitter<any> = new EventEmitter();

  // public hrefDelete:string;
  // public hrefEdit:string;

  constructor() { }

  ngOnInit() {


  }

  public edit() {
    console.log('edit du ts');
    this.doEdit$.emit('');
    // this.doEdit$.emit('edit');
  }

  public delete() {
    console.log('delete du ts');
    this.doDelete$.emit('');
  }


}
