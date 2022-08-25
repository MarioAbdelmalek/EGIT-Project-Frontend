import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NodeService } from '../../node.service';

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.css']
})
export class UpdateNodeComponent implements OnInit {

  nodeForm!: FormGroup;

  constructor(private nodeService:NodeService, private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public nodeToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateNodeComponent
    >) { }

  ngOnInit(): void {
    this.nodeForm=this.formBuilder.group({
      NodeName : ['', Validators.required],
      NodeType : ['', Validators.required],
      TotalRAM : ['', Validators.required],
      RemainingRAM : ['', Validators.required],
      TotalCPUCores :['', Validators.required],
      RemainingCPUCores :['', Validators.required],
      ClusterID :['', Validators.required],


  });
  
  if(this.nodeToBeUpdated){
    debugger;
      this.nodeForm.controls['NodeName'].setValue(this.nodeToBeUpdated.NodeName);
      this.nodeForm.controls['NodeType'].setValue(this.nodeToBeUpdated.NodeType);
      this.nodeForm.controls['TotalRAM'].setValue(this.nodeToBeUpdated.TotalRAM);
      this.nodeForm.controls['RemainingRAM'].setValue(this.nodeToBeUpdated.RemainingRAM);
      this.nodeForm.controls['TotalCPUCores'].setValue(this.nodeToBeUpdated.TotalCPUCores);
      this.nodeForm.controls['RemainingCPUCores'].setValue(this.nodeToBeUpdated.RemainingCPUCores);
      this.nodeForm.controls['ClusterID'].setValue(this.nodeToBeUpdated.ClusterID);

  }
  }
  UpdateNode(){

    debugger;
    this.nodeService.UpdateNode(this.nodeForm.value,this.nodeToBeUpdated.NodeID).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          alert("Error Updating Node!!")
        }
      })

    }



}
