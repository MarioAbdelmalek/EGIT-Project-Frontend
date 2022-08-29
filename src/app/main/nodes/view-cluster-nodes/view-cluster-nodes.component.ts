import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateNodeComponent } from '../create-node/create-node.component';
import { NodeService } from '../node.service';
import { UpdateNodeComponent } from '../update-node/update-node.component';

@Component({
  selector: 'app-view-cluster-nodes',
  templateUrl: './view-cluster-nodes.component.html',
  styleUrls: ['./view-cluster-nodes.component.css']
})
export class ViewClusterNodesComponent implements OnInit {

  clusterID: any;
  nodeService: NodeService;
  clusterNodesList: any;
  private dialog: MatDialog;


  displayedColumns: string[] = ['NodeID', 'NodeName', 'NodeTotalRAM', 'NodeRemainingRAM', 'NodeTotalCPUCores', 'NodeRemainingCPUCores', 'VMs', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private route: ActivatedRoute, nodeService: NodeService, dialog: MatDialog, private router: Router) {
    this.nodeService = nodeService;
    this.dialog = dialog;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getClusterNodes(clusterID: any) {
    this.nodeService.getClusterNodes(clusterID).subscribe({
      next: (res) => {
        this.clusterNodesList = res;
        this.dataSource = new MatTableDataSource(this.clusterNodesList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert("Error While Fetching The Cluster Nodes!!")
      }
    }
    );
  }

  viewNodeVMs(nodeID: any) {
    this.router.navigate(['viewNodeVMs', nodeID]);
  }

  openCreateNodeDialog() {
    this.dialog.open(CreateNodeComponent, {
      width: '400px',
      data: this.clusterID
    });
  }

  openUpdateNodeDialog(nodeToBeUpdated: any) {
    this.dialog.open(UpdateNodeComponent, {
      width: '400px',
      data: nodeToBeUpdated
    });
  }

  deleteNode(id: any) {
    this.nodeService.deleteNode(id).subscribe(({
      next: (res) => {
        if (res.IsValid === false) {
          alert("Cannot Delete This Node, Please Delete Its VMs First!");
          // this.router.navigate(['viewClusterNodes', id]);
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
    this.clusterID = this.route.snapshot.paramMap.get("clusterID");
    this.getClusterNodes(this.clusterID);
  }

}
