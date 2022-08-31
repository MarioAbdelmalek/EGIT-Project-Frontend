import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '../../storages/storage.service';
import { LunService } from '../lun.service';

@Component({
  selector: 'app-update-lun',
  templateUrl: './update-lun.component.html',
  styleUrls: ['./update-lun.component.css']
})
export class UpdateLunComponent implements OnInit {

  lunForm!: FormGroup;
  StorageLun:any;

  constructor(private lunService:LunService, private formBuilder:FormBuilder, private storageService:StorageService,
    @Inject(MAT_DIALOG_DATA) public lunToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateLunComponent>){}

  ngOnInit(): void {
    this.lunForm=this.formBuilder.group({
      LunName : ['', Validators.required],
      LunTotalSpace : ['', Validators.required],
      StorageID :[+this.lunToBeUpdated.id, Validators.required],
  });
  
  if(this.lunToBeUpdated){
      this.lunForm.controls['LunName'].setValue(this.lunToBeUpdated.LunName);
      this.lunForm.controls['LunTotalSpace'].setValue(this.lunToBeUpdated.LunTSpace);
      this.lunForm.controls['StorageID'].setValue(this.lunToBeUpdated.StorageID);
  }
}

  UpdateLun(){

    debugger;
    this.lunService.updateLun(this.lunForm.value,this.lunToBeUpdated.LunID).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          alert("Error Updating Lun!!")
        }
      })
    }

    getStorageByID(){
      this.storageService.getStorageByID(this.lunToBeUpdated.StorageID).subscribe((res)=>{
        this.StorageLun=res;
      })
    }
}


