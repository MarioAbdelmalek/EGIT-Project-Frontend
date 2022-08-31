import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SignalRService } from '../../signalR.service';
import { VMService } from '../../vms/vm.service';
import { LunService } from '../lun.service';

@Component({
  selector: 'app-view-lun-vms',
  templateUrl: './view-lun-vms.component.html',
  styleUrls: ['./view-lun-vms.component.css']
})
export class ViewLunVmsComponent implements OnInit {

  lunVMsList:any;
  dataSource!: MatTableDataSource<any>;
  lunID:any;
  displayedColumns: string[] = ['VMID', 'ClientID', 'RAM', 'CPUCores', 'Storage', 'IP', 'Bandwidth'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private route:ActivatedRoute,private lunService:LunService
    ,private vmService:VMService, private signalRService:SignalRService) { }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    } 

    getLunVMs(nodeID: any) {
      this.lunService.getLunVMs(nodeID).subscribe({
        next: (res) => {
          this.lunVMsList = res;
          this.dataSource = new MatTableDataSource(this.lunVMsList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error While Fetching The Node VMs!!")
        }
      }
      );
    }
  ngOnInit(): void {
    this.lunID = this.route.snapshot.paramMap.get("LunID");
    this.getLunVMs(this.lunID);

    this.signalRService.startConnection();
    this.signalRService.updatedVMList.subscribe((item: any) => {
      for (var vm of item) {
        var oldVM = this.lunVMsList.find((obj: { VMID: any; }) => {
          return obj.VMID == vm.VMID;
        });

        if (oldVM != null) {
          var vmIndex = this.lunVMsList.indexOf(oldVM);
          this.lunVMsList[vmIndex] = vm;
        }
        else {
          this.lunVMsList.push(vm);
        }
      }

      this.dataSource = new MatTableDataSource(this.lunVMsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

}
