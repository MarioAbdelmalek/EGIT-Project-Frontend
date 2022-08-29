import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateVMComponent } from '../create-vm/create-vm.component';
import { UpdateVMComponent } from '../update-vm/update-vm.component';
import { VMService } from '../vm.service';

@Component({
  selector: 'app-view-node-vms',
  templateUrl: './view-node-vms.component.html',
  styleUrls: ['./view-node-vms.component.css']
})
export class ViewNodeVMsComponent implements OnInit {

  nodeID: any;
  vmService: VMService;
  nodeVMsList: any;
  private dialog: MatDialog;


  displayedColumns: string[] = ['VMID', 'ClientID', 'LunID', 'RAM', 'CPUCores', 'Storage', 'IP', 'Bandwidth', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private route: ActivatedRoute, vmService: VMService, dialog: MatDialog, private router: Router) {
    this.vmService = vmService;
    this.dialog = dialog;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getNodeVMs(nodeID: any) {
    this.vmService.getNodeVMs(nodeID).subscribe({
      next: (res) => {
        this.nodeVMsList = res;
        this.dataSource = new MatTableDataSource(this.nodeVMsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("Error While Fetching The Node VMs!!")
      }
    }
    );
  }

  openCreateVMDialog() {
    this.dialog.open(CreateVMComponent, {
      width: '400px',
      data: this.nodeID
    });
  }

  openUpdateVMDialog(oldVM: any) {
    this.dialog.open(UpdateVMComponent, {
      width: '400px',
      data: { vmToBeUpdated: oldVM, VMNodeID: this.nodeID }
    });
  }

  deleteVM(id: any) {
    this.vmService.deleteVM(id).subscribe(() => {
      window.location.reload();
    })
  }

  ngOnInit(): void {
    this.nodeID = this.route.snapshot.paramMap.get("nodeID");
    this.getNodeVMs(this.nodeID);
  }

}
