import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LunComponent } from './lun/lun.component';
import { StorageComponent } from './storage/storage.component';
import { ViewLunsComponent } from './lun/view-luns/view-luns.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { UpdateLunComponent } from './lun/update-lun/update-lun.component';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateLunComponent } from './lun/create-lun/create-lun.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MainComponent,
    LunComponent,
    StorageComponent,
    ViewLunsComponent,
    UpdateLunComponent,
    CreateLunComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatPseudoCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ]
})
export class MainModule { }
