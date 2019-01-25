/**
 * Copyright (c) 2018 Lufthansa Industry Solutions TS GmbH
 * All Rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningPokerComponent } from './planning-poker.component';
import { PlanningPokerRoutingModule } from './planning-poker-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 *
 * 
 * @author 
 */
@NgModule({
  declarations: [PlanningPokerComponent],
  imports: [
    CommonModule,
    PlanningPokerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    
  ]
})
export class PlanningPokerModule { }
