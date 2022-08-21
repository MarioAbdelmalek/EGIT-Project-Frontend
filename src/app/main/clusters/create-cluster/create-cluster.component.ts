import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClusterService } from '../cluster.service';

@Component({
  selector: 'app-create-cluster',
  templateUrl: './create-cluster.component.html',
  styleUrls: ['./create-cluster.component.css']
})
export class CreateClusterComponent implements OnInit {

  clusterForm!: FormGroup;
  formBuilder: FormBuilder;
  clusterService: ClusterService;

  constructor(formBuilder: FormBuilder, clusterService: ClusterService,
    private dialogRef: MatDialogRef<CreateClusterComponent>) {
    this.formBuilder = formBuilder;
    this.clusterService = clusterService;
  }

  addCluster() {
    this.clusterService.addCluster(this.clusterForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Creating The Cluster!!")
      }
    })
  }

  ngOnInit(): void {
    this.clusterForm = this.formBuilder.group({
      ClusterName: ['', Validators.required],
      ClusterType: ['', Validators.required]
    })
  }

}
