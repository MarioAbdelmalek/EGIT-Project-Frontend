import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SignalRService } from '../../signalR.service';
import { AddClientComponent } from '../add-client/add-client.component';
import { ClientService } from '../client.service';
import { UpdateClientComponent } from '../update-client/update-client.component';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {

  clientService: ClientService;
  clientList: any;
  private dialog: MatDialog;
  signalRService: SignalRService;

  displayedColumns: string[] = ['ClientID', 'ClientName', 'ClientSector', 'ISPID', 'Action'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(clientService: ClientService, signalRService: SignalRService, dialog: MatDialog) {
    this.clientService = clientService;
    this.dialog = dialog;
    this.signalRService = signalRService;
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
    this.dialog.open(AddClientComponent, {
      width: '400px'
    });
  }

  openUpdateClientDialog(oldClient: any) {
    this.dialog.open(UpdateClientComponent, {
      width: '400px',
      data: {clientToBeUpdated: oldClient}
    });
  }

  deleteClient(id: any) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.getAllClients();
    })
  }

  ngOnInit(): void {
    this.getAllClients();

    this.signalRService.startConnection();
    this.signalRService.updatedClientList.subscribe((item: any) => {
      for (var client of item) {

        var oldClient = this.clientList.find((obj: { ClientID: any; }) => {
          return obj.ClientID == client.ClientID;
        });

        if (oldClient != null) {
          var clientIndex = this.clientList.indexOf(oldClient);
          this.clientList[clientIndex] = client;
        }
        else {
          this.clientList.push(client);
        }
      }

      this.dataSource = new MatTableDataSource(this.clientList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

}
