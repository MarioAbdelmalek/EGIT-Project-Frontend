import { Component, OnInit } from '@angular/core';
import { Lun } from 'src/Models/lun';
import { MatTableDataSource } from '@angular/material/table';
import { LunService } from '../../lun.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLunComponent } from '../update-lun/update-lun.component';
import { CreateLunComponent } from '../create-lun/create-lun.component';


@Component({
  selector: 'app-view-luns',
  templateUrl: './view-luns.component.html',
  styleUrls: ['./view-luns.component.css']
})
export class ViewLunsComponent implements OnInit {

  LunsList : Lun[]=[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'Name', 'Type', 'Total Space','Remaining Space','Storage ID','Action'];

  constructor(private lunService :LunService, private route:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetAllLuns();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  GetAllLuns(){
    this.lunService.GetAllLuns().subscribe(data => {
      this.LunsList=data;
      this.dataSource= new MatTableDataSource(this.LunsList);
    })
  }

  DeleteLun(LunID : number){
    this.lunService.DeleteLun(LunID).subscribe((res)=>{
      console.log(res);
    });
  }

  openUpdateLunDialog(lun:Lun){

    this.dialog.open(UpdateLunComponent,lun);
  }

  openCreateLunDialog(){
    this.dialog.open(CreateLunComponent);
  }

}
