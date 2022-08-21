import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'viewAllClusters', component: ViewClustersComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
