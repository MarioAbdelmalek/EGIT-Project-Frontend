import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewClientsComponent } from './clients/view-clients/view-clients.component';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';
import { ViewStoragesComponent } from './storages/view-storages/view-storages.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'viewAllClusters', component: ViewClustersComponent },
      { path: 'viewAllStorages', component: ViewStoragesComponent },
      { path: 'viewAllClients', component: ViewClientsComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
