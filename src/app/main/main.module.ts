import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LunComponent } from './lun/lun.component';
import { ViewLunsComponent } from './lun/view-luns/view-luns.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { UpdateLunComponent } from './lun/update-lun/update-lun.component';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { CreateLunComponent } from './lun/create-lun/create-lun.component';
import { LunService } from './lun.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewClustersComponent } from './clusters/view-clusters/view-clusters.component';
import { CreateClusterComponent } from './clusters/create-cluster/create-cluster.component';
import { UpdateClusterComponent } from './clusters/update-cluster/update-cluster.component';
import { ClusterService } from './clusters/cluster.service';
import { ViewNodesComponent } from './nodes/view-nodes/view-nodes.component';
import { UpdateNodeComponent } from './nodes/update-node/update-node.component';
import { CreateNodeComponent } from './nodes/create-node/create-node.component';

@NgModule({
  declarations: [
    MainComponent,
    LunComponent,
    ViewLunsComponent,
    UpdateLunComponent,
    CreateLunComponent,
    HomePageComponent,
    ViewClustersComponent,
    CreateClusterComponent,
    UpdateClusterComponent,
    ViewNodesComponent,
    UpdateNodeComponent,
    CreateNodeComponent,
    
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
  ],
  providers: [LunService,ClusterService, HttpClient, HttpClientModule]
})
export class MainModule { }
