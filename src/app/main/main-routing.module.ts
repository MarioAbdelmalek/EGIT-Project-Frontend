import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLunsComponent } from './lun/view-luns/view-luns.component';
import { ViewClientsComponent } from './clients/view-clients/view-clients.component';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';
import { ViewClusterNodesComponent } from './nodes/view-cluster-nodes/view-cluster-nodes.component';
import { ViewStoragesComponent } from './storages/view-storages/view-storages.component';
import { ViewStorageLunsComponent } from './storages/view-storage-luns/view-storage-luns.component';
import { ViewVpnsComponent } from './vpns/view-vpns/view-vpns.component';
import { ViewNodeVMsComponent } from './vms/view-node-vms/view-node-vms.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'viewAllClusters', component: ViewClustersComponent },
      {path: 'viewAllLuns', component:ViewLunsComponent},
      { path: 'viewAllStorages', component: ViewStoragesComponent },
      { path: 'viewAllClients', component: ViewClientsComponent },
      {path: 'viewAllStorages/viewStorageLuns/:id', component:ViewStorageLunsComponent},
      {path:'viewAllVpns',component:ViewVpnsComponent},
      { path: 'viewClusterNodes/:clusterID', component: ViewClusterNodesComponent },
      { path: 'viewNodeVMs/:nodeID', component: ViewNodeVMsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
