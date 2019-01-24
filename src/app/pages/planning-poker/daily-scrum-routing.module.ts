/**
 * Copyright (c) 2018 Lufthansa Industry Solutions TS GmbH
 * All Rights reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningPokerComponent } from './planning-poker.component';

/**
 * Routes of the hero list component.
 */
const routes: Routes = [{
  path: '',
  component: PlanningPokerComponent
}];

/**
 * Hero list module. Declares all dependencies used for hero list component.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningPokerModule { }
