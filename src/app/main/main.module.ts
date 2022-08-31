import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { CreateLunComponent } from './luns/create-lun/create-lun.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { CreateClusterComponent } from './clusters/create-cluster/create-cluster.component';
import { UpdateClusterComponent } from './clusters/update-cluster/update-cluster.component';
import { ClusterService } from './clusters/cluster.service';
import { ViewStoragesComponent } from './storages/view-storages/view-storages.component';
import { CreateStorageComponent } from './storages/create-storage/create-storage.component';
import { UpdateStorageComponent } from './storages/update-storage/update-storage.component';
import { StorageService } from './storages/storage.service';
import { ViewClientsComponent } from './clients/view-clients/view-clients.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ClientService } from './clients/client.service';
import { ViewVpnsComponent } from './vpns/view-vpns/view-vpns.component';
import { CreateVpnComponent } from './vpns/create-vpn/create-vpn.component';
import { UpdateVpnComponent } from './vpns/update-vpn/update-vpn.component';
import { NodeService } from './nodes/node.service';
import { CreateVMComponent } from './vms/create-vm/create-vm.component';
import { UpdateVMComponent } from './vms/update-vm/update-vm.component';
import { VMService } from './vms/vm.service';
import { VpnService } from './vpns/vpn.service';
import { UpdateLunComponent } from './luns/update-lun/update-lun.component';
import { LunService } from './luns/lun.service';
import { TokenInterceptorService } from '../users/token-interceptor.service';
import { ViewStorageLunsComponent } from './storages/view-storage-luns/view-storage-luns.component';
import { ViewClusterNodesComponent } from './nodes/view-cluster-nodes/view-cluster-nodes.component';
import { ViewNodeVMsComponent } from './vms/view-node-vms/view-node-vms.component';
import { CreateNodeComponent } from './nodes/create-node/create-node.component';
import { UpdateNodeComponent } from './nodes/update-node/update-node.component';
import { ViewLunVmsComponent } from './luns/view-lun-vms/view-lun-vms.component';


@NgModule({
  declarations: [
    MainComponent,
    UpdateLunComponent,
    CreateLunComponent,
    HomePageComponent,
    ViewClustersComponent,
    CreateClusterComponent,
    UpdateClusterComponent,
    ViewStoragesComponent,
    CreateStorageComponent,
    UpdateStorageComponent,
    ViewClientsComponent,
    UpdateClientComponent,
    AddClientComponent,
    ViewVpnsComponent,
    CreateVpnComponent,
    UpdateVpnComponent,
    CreateVMComponent,
    UpdateVMComponent,
    ViewStorageLunsComponent,
    ViewClusterNodesComponent,
    ViewNodeVMsComponent,
    CreateNodeComponent,
    UpdateNodeComponent,
    ViewLunVmsComponent

 
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [LunService,ClusterService, HttpClient, HttpClientModule, ClientService, StorageService,NodeService,VMService,VpnService,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}]
})
export class MainModule { }
