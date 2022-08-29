import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClusterService } from '../cluster.service';

@Component({
  selector: 'app-update-cluster',
  templateUrl: './update-cluster.component.html',
  styleUrls: ['./update-cluster.component.css']
})
export class UpdateClusterComponent implements OnInit {

  clusterForm!: FormGroup;
  formBuilder: FormBuilder;
  clusterService: ClusterService;

  constructor(formBuilder: FormBuilder, clusterService: ClusterService,
    @Inject(MAT_DIALOG_DATA) public clusterToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateClusterComponent>) {
    this.formBuilder = formBuilder;
    this.clusterService = clusterService;
  }

  updateCluster() {
    this.clusterService.updateCluster(this.clusterToBeUpdated.ClusterID, this.clusterForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Updating The Cluster!!")
      }
    })

  }

  ngOnInit(): void {
    this.clusterForm = this.formBuilder.group({
      ClusterName: ['', Validators.required],
      ClusterType: ['', Validators.required]
    });

    if (this.clusterToBeUpdated) {
      this.clusterForm.controls['ClusterName'].setValue(this.clusterToBeUpdated.ClusterName);
      this.clusterForm.controls['ClusterType'].setValue(this.clusterToBeUpdated.ClusterType);
    }
  }

}
