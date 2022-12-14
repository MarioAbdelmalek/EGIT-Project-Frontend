import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SignalRService } from '../../signalR.service';
import { CreateStorageComponent } from '../create-storage/create-storage.component';
import { StorageService } from '../storage.service';
import { UpdateStorageComponent } from '../update-storage/update-storage.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-view-storages',
  templateUrl: './view-storages.component.html',
  styleUrls: ['./view-storages.component.css']
})
export class ViewStoragesComponent implements OnInit {

  storageService: StorageService;
  storageList: any;
  lunsList:any;
  private dialog: MatDialog;

  displayedColumns: string[] = ['StorageID', 'StorageName', 'StorageType', 'StorageTotalSpace', 'StorageRemainingSpace', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(storageService: StorageService, dialog: MatDialog, private route:ActivatedRoute,
    private signalRService: SignalRService,private toast: NgToastService,
    private router:Router) {
    this.storageService = storageService;
    this.dialog = dialog;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllStorages() {
    this.storageService.getAllStorages().subscribe((res:any)=>{
     {
        this.storageList = res;
        this.dataSource = new MatTableDataSource(this.storageList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
    );
  }

  openCreateStorageDialog() {
    this.dialog.open(CreateStorageComponent, {
      width: '400px'
    });
  }

  openUpdateStorageDialog(storageToBeUpdated: any) {
    this.dialog.open(UpdateStorageComponent, {
      width: '400px',
      data: storageToBeUpdated
    });
  }

  deleteStorage(id: any) {
    this.storageService.deleteStorage(id).subscribe(({
      next: (res) => {
        if (res.IsValid === false) {
          this.toast.error({ detail: "Cannot Delete This Storage", summary: "Delete The Storage Luns First!", duration: 4000 });
          this.router.navigate(['home/viewAllStorages/viewStorageLuns', id]);
        }

        else {
          window.location.reload();
        }

      },
      error: (err) => {
        console.log(err);
      }
    }))
  }

  ngOnInit(): void {

    this.getAllStorages();

    this.signalRService.startConnection();
    this.signalRService.updatedStorageList.subscribe((item: any) => {
      for (var storage of item) {

        var oldStorage = this.storageList.find((obj: { StorageID: any; }) => {
          return obj.StorageID == storage.StorageID;
        });
        if (oldStorage != null) {
          var storageIndex = this.storageList.indexOf(oldStorage);
          this.storageList[storageIndex] = storage;
        }
        else {
          this.storageList.push(storage);
        }
      }

      this.dataSource = new MatTableDataSource(this.storageList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
   
  }
}
0