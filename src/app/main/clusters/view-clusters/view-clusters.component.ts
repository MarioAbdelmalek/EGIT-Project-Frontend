import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/signal-r.service';
import { ClusterService } from '../cluster.service';
import { CreateClusterComponent } from '../create-cluster/create-cluster.component';
import { UpdateClusterComponent } from '../update-cluster/update-cluster.component';

@Component({
  selector: 'app-view-clusters',
  templateUrl: './view-clusters.component.html',
  styleUrls: ['./view-clusters.component.css']
})
export class ViewClustersComponent implements OnInit {

  clusterService: ClusterService;
  clusterList: any;
  private dialog: MatDialog;

  displayedColumns: string[] = ['ClusterID', 'ClusterType', 'ClusterName', 'ClusterRemainingRAM', 'ClusterRemainingCPUCores', 'Nodes', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(clusterService: ClusterService, dialog: MatDialog, private router: Router, private signalRService:SignalRService) {
    this.clusterService = clusterService;
    this.dialog = dialog;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllClusters() {
    this.clusterService.getAllClusters().subscribe({
      next: (res) => {
        this.clusterList = res;
        this.dataSource = new MatTableDataSource(this.clusterList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("Error While Fetching The Clusters!!")
      }
    }
    );
  }

  viewClusterNodes(clusterID: any) {
    
    this.router.navigate(['viewClusterNodes', clusterID]);
  }

  openCreateClusterDialog() {
    this.dialog.open(CreateClusterComponent, {
      width: '400px'
    });
  }

  openUpdateClusterDialog(clusterToBeUpdated: any) {
    this.dialog.open(UpdateClusterComponent, {
      width: '400px',
      data: clusterToBeUpdated
    });
  }

  deleteCluster(id: any) {
    this.clusterService.deleteCluster(id).subscribe(({
      next: (res) => {
        if (res.IsValid === false) {
          alert("Cannot Delete This Cluster, Please Delete Its Nodes First!");
          this.router.navigate(['viewClusterNodes', id]);
        }

        else {
          this.getAllClusters();
        }

      },
      error: (err) => {
        console.log(err);
      }
    }))
  }

  ngOnInit(): void {
    this.getAllClusters();

  }

}
