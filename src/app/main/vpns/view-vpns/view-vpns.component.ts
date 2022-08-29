import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/signal-r.service';
import { CreateVpnComponent } from '../create-vpn/create-vpn.component';
import { UpdateVpnComponent } from '../update-vpn/update-vpn.component';
import { VpnService } from '../vpn.service';

@Component({
  selector: 'app-view-vpns',
  templateUrl: './view-vpns.component.html',
  styleUrls: ['./view-vpns.component.css']
})
export class ViewVpnsComponent implements OnInit {

  vpnsList:any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'Username','ClientID','Action'];

  constructor(private vpnService:VpnService, 
    private route:Router, private dialog:MatDialog ,private signalRService:SignalRService) { }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.GetAllVpns();

    this.signalRService.startConnection();
    this.signalRService.updatedLunList.subscribe((item : any) =>{
    this.vpnsList=item;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  GetAllVpns(){
    this.vpnService.GetAllVpns().subscribe(data => {
      this.vpnsList=data;
      this.dataSource= new MatTableDataSource(this.vpnsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

  DeleteVpn(VpnID : number){
    this.vpnService.DeleteVpn(VpnID).subscribe((res)=>{
      console.log(res);
    });
  }

  openUpdateVpnDialog(vpnToBeUpdated:any){

    this.dialog.open(UpdateVpnComponent,{
      width: '400px',
      data: vpnToBeUpdated
    });
  }
  openCreateVpnDialog(){
    this.dialog.open(CreateVpnComponent);
  }
}
