import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewClientsComponent } from './clients/view-clients/view-clients.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';
import { ViewStoragesComponent } from './storages/view-storages/view-storages.component';
import { ViewStorageLunsComponent } from './storages/view-storage-luns/view-storage-luns.component';
import { ViewVpnsComponent } from './vpns/view-vpns/view-vpns.component';
import { ViewNodeVMsComponent } from './vms/view-node-vms/view-node-vms.component';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { ViewClusterNodesComponent } from './nodes/view-cluster-nodes/view-cluster-nodes.component';
import { ViewLunVmsComponent } from './luns/view-lun-vms/view-lun-vms.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'viewAllStorages/viewStorageLuns/:id', component:ViewStorageLunsComponent},
      { path:'viewAllVpns',component:ViewVpnsComponent},
      { path: 'viewAllClusters', component: ViewClustersComponent },
      { path: 'viewAllStorages', component: ViewStoragesComponent },
      { path: 'viewAllClients', component: ViewClientsComponent },
      { path: 'viewClusterNodes/:clusterID', component: ViewClusterNodesComponent },
      { path: 'viewNodeVMs/:nodeID', component: ViewNodeVMsComponent },
      {path: 'viewAllStorages/viewStorageLuns/:id/viewLunVMs/:LunID',component:ViewLunVmsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
