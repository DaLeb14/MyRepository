import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePageNotFoundComponent } from './pages/page-page-not-found/page-page-not-found.component';




const appRoutes: Routes = [
  { path: '', component: PagePageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class PageNotFoundRoutingModule { }
