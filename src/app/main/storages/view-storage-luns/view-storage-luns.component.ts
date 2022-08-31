import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Lun } from 'src/Models/lun';
import { CreateLunComponent } from '../../luns/create-lun/create-lun.component';
import { StorageService } from '../storage.service';
import { LunService } from '../../luns/lun.service';
import { UpdateLunComponent } from '../../luns/update-lun/update-lun.component';
import { SignalRService } from '../../signalR.service';

@Component({
  selector: 'app-view-storage-luns',
  templateUrl: './view-storage-luns.component.html',
  styleUrls: ['./view-storage-luns.component.css']
})
export class ViewStorageLunsComponent implements OnInit {

  
  storageLunsList: any;
  storageService: StorageService;
  lunService:LunService;
  route:ActivatedRoute;
  dialog:MatDialog;
  id:any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'Name', 'Total Space','Remaining Space','Action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( storageService: StorageService, dialog:MatDialog, lunService:LunService,
    route:ActivatedRoute, private signalRService:SignalRService) {
    this.storageService = storageService;
    this.route=route;
    this.dialog=dialog;
    this.lunService=lunService;
  }


  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.getStorageLuns(this.id);
    
    this.signalRService.startConnection();
    this.signalRService.updatedLunList.subscribe((item: any) => {
      for (var lun of item) {

        var oldLun = this.storageLunsList.find((obj: { LunID: any; }) => {
          return obj.LunID == lun.LunID;
        });
        if (oldLun != null) {
          var lunIndex = this.storageLunsList.indexOf(oldLun);
          this.storageLunsList[lunIndex] = lun;
        }
        else {
          this.storageLunsList.push(lun);
        }
      }

      this.dataSource = new MatTableDataSource(this.storageLunsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });   

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStorageLuns(StorageID :any){
    
    this.storageService.getStorageLuns(StorageID).subscribe({
      next: (res) => {
        this.storageLunsList = res;
        this.dataSource = new MatTableDataSource(this.storageLunsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("Error While Fetching The Storages!!")
      }
    }
    );
  }
  openCreateLunDialog(){
    this.dialog.open(CreateLunComponent,{
      width: '400px',
      data: this.id
    });
  }
  
  DeleteLun(LunID : number){
    this.lunService.deleteLun(LunID).subscribe((res)=>{
    });
  }

  openUpdateLunDialog(lunToBeUpdated:Lun){

    this.dialog.open(UpdateLunComponent,{
      width: '400px',
      data: lunToBeUpdated
    });
  }
}
