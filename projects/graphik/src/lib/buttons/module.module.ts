import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { Button1Component } from './components/button1/button1.component';



@NgModule({
  declarations: [ComponentComponent, Button1Component],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { }
