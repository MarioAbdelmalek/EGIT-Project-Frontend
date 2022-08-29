import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {

  nodeForm!: FormGroup;
  formBuilder: FormBuilder;
  nodeService: NodeService;

  constructor(formBuilder: FormBuilder, nodeService: NodeService,
    @Inject(MAT_DIALOG_DATA) public clusterID: any,
    private dialogRef: MatDialogRef<CreateNodeComponent>) {
    this.formBuilder = formBuilder;
    this.nodeService = nodeService;
  }

  addNode() {
    this.nodeService.addNode(this.nodeForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Adding The Node!!")
      }
    })
  }

  ngOnInit(): void {
    this.nodeForm = this.formBuilder.group({
      ClusterID: [+this.clusterID, Validators.required],
      NodeName: ['', Validators.required],
      NodeTotalRAM: ['', Validators.required],
      NodeTotalCPUCores: ['', Validators.required]
    })
  }

}