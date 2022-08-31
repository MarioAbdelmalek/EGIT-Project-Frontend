import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateLunDto } from 'src/Models/CreateLunDto';
import { StorageService } from '../../storages/storage.service';
import { ViewStorageLunsComponent } from '../../storages/view-storage-luns/view-storage-luns.component';
import { LunService } from '../lun.service';

@Component({
  selector: 'app-create-lun',
  templateUrl: './create-lun.component.html',
  styleUrls: ['./create-lun.component.css']
})
export class CreateLunComponent implements OnInit {

  lunForm!: FormGroup;
  StorageLun:any;

  constructor(private lunService:LunService,private formBuilder:FormBuilder,
    private dialogRef: MatDialogRef<ViewStorageLunsComponent>,private storageService:StorageService,
    @Inject(MAT_DIALOG_DATA) public id: any) { }

  ngOnInit(): void {

    this.getStorageByID(this.id);
    this.lunForm=this.formBuilder.group({
      LunName : ['', Validators.required],
      LunTotalSpace : ['', Validators.required],
      StorageID:[+this.id,Validators.required]
  });

  }
  
  CreateLun(){
    this.lunService.addLun(this.lunForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Creating Lun!!")
      }
    })
  }

  getStorageByID(StorageID:any){
    this.storageService.getStorageByID(StorageID).subscribe((res)=>{
      this.StorageLun=res;
    })
  }
  
}
