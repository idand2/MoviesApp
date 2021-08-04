import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedComponent } from './recommended/recommended.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path: 'recommended', component: RecommendedComponent},
  {path: 'topFive', component: TopFiveComponent},
  {path: 'trending', component: TrendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
