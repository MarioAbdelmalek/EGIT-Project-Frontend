import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {

  clientService: ClientService;
  clientList: any;
  private dialog: MatDialog;

  displayedColumns: string[] = ['ClientID', 'ClientName', 'ClientSector', 'ISPID', 'Action'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(clientService: ClientService, dialog: MatDialog) {
    this.clientService = clientService;
    this.dialog = dialog;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe({
      next: (res) => {
        console.log(res);
        this.clientList = res;
        this.dataSource = new MatTableDataSource(this.clientList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("Error While Fetching The Clients!!")
      }
    }
    );
  }

  openCreateClientDialog() {
    // this.dialog.open(CreateClusterComponent, {
    //   width: '400px'
    // });
  }

  openUpdateClientDialog(clusterToBeUpdated: any) {
    // this.dialog.open(UpdateClusterComponent, {
    //   width: '400px',
    //   data: clusterToBeUpdated
    // });
  }

  deleteClient(id: any) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.getAllClients();
    })
  }

  ngOnInit(): void {
    this.getAllClients();
  }

}
