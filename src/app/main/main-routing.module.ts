import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLunsComponent } from './lun/view-luns/view-luns.component';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';
import { ViewNodesComponent } from './nodes/view-nodes/view-nodes.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'viewAllClusters', component: ViewClustersComponent },
      {path: 'viewAllLuns', component:ViewLunsComponent},
      {path: 'viewAllNodes', component:ViewNodesComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
