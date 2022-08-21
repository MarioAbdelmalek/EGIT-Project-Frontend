import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lun } from 'src/Models/lun';
import { LunService } from '../../lun.service';

@Component({
  selector: 'app-update-lun',
  templateUrl: './update-lun.component.html',
  styleUrls: ['./update-lun.component.css']
})
export class UpdateLunComponent implements OnInit {

  lunForm!: FormGroup;

  constructor(private lunService:LunService, private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public lunToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateLunComponent>){}

  ngOnInit(): void {
    this.lunForm=this.formBuilder.group({
      LunID: [''],
      LunName : [''],
      LunType : ['', Validators.required],
      LunTSpace : ['', Validators.required],
      LunRSpace : ['', Validators.required],
      StorageID :['', Validators.required],
  });
  
  if(this.lunToBeUpdated){
    this.lunForm.controls['LunID'].setValue(this.lunToBeUpdated.LunID);
      this.lunForm.controls['LunName'].setValue(this.lunToBeUpdated.LunName);
      this.lunForm.controls['LunType'].setValue(this.lunToBeUpdated.LunType);
      this.lunForm.controls['LunTSpace'].setValue(this.lunToBeUpdated.LunTSpace);
      this.lunForm.controls['LunRSpace'].setValue(this.lunToBeUpdated.LunRSpace);
      this.lunForm.controls['StorageID'].setValue(this.lunToBeUpdated.StorageID);
  }
}

  UpdateLun(){

    this.lunToBeUpdated.LunType=this.lunForm.value["LunType"];
    this.lunToBeUpdated.LunTSpace=this.lunForm.value["LunTSpace"];
    this.lunToBeUpdated.LunRSpace=this.lunForm.value["LunRSpace"];
    this.lunToBeUpdated.StorageID=this.lunForm.value["StorageID"];

    this.lunService.UpdateLun(this.lunToBeUpdated).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          alert("Error Updating Lun!!")
        }
      })

    }
}


