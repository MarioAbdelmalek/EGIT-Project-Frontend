import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MainRoutingModule } from './main-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    MainComponent,
    HomePageComponent,
    ViewClustersComponent,
    CreateClusterComponent,
    UpdateClusterComponent,
    ViewStoragesComponent,
    CreateStorageComponent,
    UpdateStorageComponent,
    ViewClientsComponent,
    UpdateClientComponent,
    AddClientComponent
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
    FlexLayoutModule
  ],
  providers: [ClusterService, ClientService, StorageService, HttpClient, HttpClientModule]

})
export class MainModule { }
