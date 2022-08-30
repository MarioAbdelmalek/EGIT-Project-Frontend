import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClusterService } from '../../clusters/cluster.service';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.css']
})
export class UpdateNodeComponent implements OnInit {

  nodeForm!: FormGroup;
  formBuilder: FormBuilder;
  nodeService: NodeService;
  clusterService: ClusterService;
  clusterList: any;

  constructor(formBuilder: FormBuilder, nodeService: NodeService,
    clusterService: ClusterService,
    @Inject(MAT_DIALOG_DATA) public nodeToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateNodeComponent>) {
    this.formBuilder = formBuilder;
    this.nodeService = nodeService;
    this.clusterService = clusterService;
  }

  updateNode() {
    this.nodeService.updateNode(this.nodeToBeUpdated.NodeID, this.nodeForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Updating The Node!!");
      }
    })

  }

  getClustersByType(type: any) {
    this.clusterService.getClustersByType(type).subscribe({
      next: (res) => {
        this.clusterList = res;
      },
      error: () => {
        alert("Error While Getting The Clusters!!")
      }
    }
    );
  }

  populateUpdateNodeForm() {
    if (this.nodeToBeUpdated) {
      this.nodeForm.controls['ClusterType'].setValue(this.nodeToBeUpdated.Cluster.ClusterType);
      //this.nodeForm.controls['ClusterID'].setValue(this.nodeToBeUpdated.ClusterID);
      this.nodeForm.controls['NodeName'].setValue(this.nodeToBeUpdated.NodeName);
      this.nodeForm.controls['NodeTotalRAM'].setValue(this.nodeToBeUpdated.NodeTotalRAM);
      this.nodeForm.controls['NodeTotalCPUCores'].setValue(this.nodeToBeUpdated.NodeTotalCPUCores);
    }
  }

  ngOnInit(): void {
    this.nodeForm = this.formBuilder.group({
      ClusterType: ['', Validators.required],
      ClusterID: ['', Validators.required],
      NodeName: ['', Validators.required],
      NodeTotalRAM: ['', Validators.required],
      NodeTotalCPUCores: ['', Validators.required]
    });

    this.populateUpdateNodeForm();
  }

}