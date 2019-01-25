/**
 * Copyright (c) 2018 Lufthansa Industry Solutions TS GmbH
 * All Rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningPokerComponent } from './planning-poker.component';
import { PlanningPokerModule } from './planning-poker-routing.module';


/**
 * Module of hero list.
 * 
 * @author 
 */
@NgModule({
  declarations: [PlanningPokerComponent],
  imports: [
    CommonModule,
    PlanningPokerModule,
  ],
  providers: [
    
  ]
})
export class PlaningPokerModule { }
