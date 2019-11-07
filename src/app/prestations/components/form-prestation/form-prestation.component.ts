import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})

export class FormPrestationComponent implements OnInit {

  public form: FormGroup;
  public states = State;
  private init = new Prestation();

  @Output() nItem: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // console.log(this.init);
    this.createForm();
  }


  private createForm() {

    this.form = this.fb.group(
      {
        typePresta: [this.init.typePresta, Validators.required],
        client: [this.init.client, Validators.required],
        nbJours: [this.init.nbJours],
        tjmHt: [this.init.tjmHt],
        tauxTva: [this.init.tauxTva],
        state: [this.init.state],
        comment: [this.init.comment]
      }
    );
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }

}
