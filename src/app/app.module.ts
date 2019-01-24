import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanningPokerComponent } from './pages/planning-poker/planning-poker.component';
import { DailyScrumComponent } from './pages/daily-scrum/daily-scrum.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    PlanningPokerComponent,
    DailyScrumComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
