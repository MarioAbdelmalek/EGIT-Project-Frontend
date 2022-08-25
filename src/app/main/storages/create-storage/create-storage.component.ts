import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-create-storage',
  templateUrl: './create-storage.component.html',
  styleUrls: ['./create-storage.component.css']
})
export class CreateStorageComponent implements OnInit {

  storageForm!: FormGroup;
  formBuilder: FormBuilder;
  storageService: StorageService;

  constructor(formBuilder: FormBuilder, storageService: StorageService,
    private dialogRef: MatDialogRef<CreateStorageComponent>) {
    this.formBuilder = formBuilder;
    this.storageService = storageService;
  }

  addStorage() {
    this.storageService.addStorage(this.storageForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Adding The Storage!!")
      }
    })
  }

  ngOnInit(): void {
    this.storageForm = this.formBuilder.group({
      StorageName: ['', Validators.required],
      StorageType: ['', Validators.required],
      StorageTSpace: ['', Validators.required],
      StorageRSpace: ['', Validators.required]
    })
  }

}
