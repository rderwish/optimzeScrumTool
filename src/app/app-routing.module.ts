import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanningPokerComponent } from "./pages/planning-poker/planning-poker.component";
import { DailyScrumComponent } from "./pages/daily-scrum/daily-scrum.component";


const routes: Routes = [
  {
    path: 'daily-scrum',
    loadChildren: './pages/daily-scrum/daily-scrum.module#DailyScrumComponent',
    data: [{ title: 'daily_scrum' }],
  },
  {
    path: 'planning-poker',
    loadChildren: './pages/planning-poker/planning-poker.module#PlanningPokerComponent',
    data: [{ title: 'planning_poker' }]
  },
  {
    path: '',
    redirectTo: 'daily-scrum',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
