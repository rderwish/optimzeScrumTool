/**
 * Copyright (c) 2018 Lufthansa Industry Solutions TS GmbH
 * All Rights reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyScrumComponent } from './daily-scrum.component';

/**
 * Routes of the hero list component.
 */
const routes: Routes = [{
  path: '',
  component: DailyScrumComponent
}];

/**
 * Hero list module. Declares all dependencies used for hero list component.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DailyScrumRoutingModule { 

}
