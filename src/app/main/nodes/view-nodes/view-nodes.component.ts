import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SignalRService } from 'src/app/signal-r.service';
import { NodeService } from '../../node.service';
import { CreateNodeComponent } from '../create-node/create-node.component';
import { UpdateNodeComponent } from '../update-node/update-node.component';

@Component({
  selector: 'app-view-nodes',
  templateUrl: './view-nodes.component.html',
  styleUrls: ['./view-nodes.component.css']
})
export class ViewNodesComponent implements OnInit {

  nodeList: Node[]=[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'Name', 'Type', 
  'Total RAM','Remaining RAM','TotaL CPU Cores',
  'Remaining CPU Cores','Cluster ID','Action'];
  constructor(private nodeService: NodeService,private dialog : MatDialog, private signalRService:SignalRService) { }

  ngOnInit(): void {
  this.GetAllNodes();

  this.signalRService.startConnection();
  this.signalRService.updatedLunList.subscribe((item : any) =>{
  this.nodeList=item;
  })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  GetAllNodes(){
    this.nodeService.GetAllNodes().subscribe(data => {
      this.nodeList=data;
      this.dataSource= new MatTableDataSource(this.nodeList);
    })
  }
  DeleteNode(NodeID : number){
    this.nodeService.DeleteNode(NodeID).subscribe((res)=>{
      console.log(res);
    });
  }

  openUpdateNodeDialog(nodeToBeUpdated:Node){

    this.dialog.open(UpdateNodeComponent,{
      width: '400px',
      data: nodeToBeUpdated
    });
  }
  openCreateNodeDialog(){
    this.dialog.open(CreateNodeComponent);
  }


}
