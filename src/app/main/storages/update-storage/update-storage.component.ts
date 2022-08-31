import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-update-storage',
  templateUrl: './update-storage.component.html',
  styleUrls: ['./update-storage.component.css']
})
export class UpdateStorageComponent implements OnInit {

  storageForm!: FormGroup;
  formBuilder: FormBuilder;
  storageService: StorageService;

  constructor(formBuilder: FormBuilder, storageService: StorageService,
    @Inject(MAT_DIALOG_DATA) public storageToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateStorageComponent>) {
    this.formBuilder = formBuilder;
    this.storageService = storageService;
  }

  updateStorage() {
    this.storageService.updateStorage(this.storageToBeUpdated.StorageID, this.storageForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Updating The Storage!!")
      }
    })

  }

  ngOnInit(): void {
    this.storageForm = this.formBuilder.group({
      StorageName: ['', Validators.required],
      StorageType: ['', Validators.required],
      StorageTotalSpace: ['', Validators.required],
    });

    if (this.storageToBeUpdated) {
      this.storageForm.controls['StorageName'].setValue(this.storageToBeUpdated.StorageName);
      this.storageForm.controls['StorageType'].setValue(this.storageToBeUpdated.StorageType);
      this.storageForm.controls['StorageTotalSpace'].setValue(this.storageToBeUpdated.StorageTotalSpace);
    }
  }

}
