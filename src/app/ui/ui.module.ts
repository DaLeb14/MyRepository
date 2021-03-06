import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {CoderbaseUiModule} from '@coderbase/ui';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UiComponent, NavComponent, FooterComponent, HeaderComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule,
    RouterModule,
    SharedModule
  ]
})
export class UiModule { }
