/**
 * Copyright (c) 2018 Lufthansa Industry Solutions TS GmbH
 * All Rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyScrumComponent } from './daily-scrum.component';
import { DailyScrumRoutingModule } from './daily-scrum-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Module of hero list.
 * 
 * @author 
 */
@NgModule({
  declarations: [DailyScrumComponent],
  imports: [
    CommonModule,
    DailyScrumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    
  ]
})
export class DailyScrumModule { }
