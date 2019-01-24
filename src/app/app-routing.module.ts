import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanningPokerComponent } from "./pages/planning-poker/planning-poker.component";
import { DailyScrumComponent } from "./pages/daily-scrum/daily-scrum.component";

const routes: Routes = [
  { path: "daily-scrum", component: DailyScrumComponent },
  { path: "planing-poker", component: PlanningPokerComponent },
  { path: "", component: DailyScrumComponent },
  { path: "**", component: DailyScrumComponent }
];

const routesForScrumApp: Routes = [
  {
    path: 'daily-scrum',
    loadChildren: './pages/daily-scrum/daily-scrum.module#DailyScrumComponent',
    data: [{ title: 'daily_scrum' }],
  },
  {
    path: 'planing-poker',
    loadChildren: './pages/planning-poker/planing-poker.module#PlanningPokerComponent',
    data: [{ title: 'planing_poker' }]
  },
  {
    path: '',
    redirectTo: 'daily-scrum',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routesForScrumApp)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
