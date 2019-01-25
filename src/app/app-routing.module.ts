import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanningPokerComponent } from "./pages/planning-poker/planning-poker.component";
import { DailyScrumComponent } from "./pages/daily-scrum/daily-scrum.component";


const routes: Routes = [
  {
    path: 'daily-scrum',
    loadChildren: './pages/daily-scrum/daily-scrum.module#DailyScrumModule'
  },
  {
    path: 'planning-poker',
    loadChildren: './pages/planning-poker/planning-poker.module#PlanningPokerModule'
  },
  {
    path: '',
    redirectTo: 'daily-scrum',
    pathMatch: 'full'
  }
];
/**
 * Module to define routes for the application.
 * 
 */
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
