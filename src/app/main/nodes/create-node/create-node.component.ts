import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewLunsComponent } from '../../lun/view-luns/view-luns.component';
import { NodeService } from '../../node.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {

  nodeForm!: FormGroup;

  constructor(private nodeService:NodeService,private formBuilder:FormBuilder,private dialogRef: MatDialogRef<ViewLunsComponent>) { }

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
  }

  CreateNode(){
    this.nodeService.AddNode(this.nodeForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Creating Node!!")
      }
    })
  }

}
