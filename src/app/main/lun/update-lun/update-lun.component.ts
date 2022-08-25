import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
      LunName : ['', Validators.required],
      LunType : ['', Validators.required],
      LunTSpace : ['', Validators.required],
      LunRSpace : ['', Validators.required],
      StorageID :['', Validators.required],
  });
  
  if(this.lunToBeUpdated){
    debugger;
      this.lunForm.controls['LunName'].setValue(this.lunToBeUpdated.LunName);
      this.lunForm.controls['LunType'].setValue(this.lunToBeUpdated.LunType);
      this.lunForm.controls['LunTSpace'].setValue(this.lunToBeUpdated.LunTSpace);
      this.lunForm.controls['LunRSpace'].setValue(this.lunToBeUpdated.LunRSpace);
      this.lunForm.controls['StorageID'].setValue(this.lunToBeUpdated.StorageID);
  }
}

  UpdateLun(){

    debugger;
    this.lunService.UpdateLun(this.lunForm.value,this.lunToBeUpdated.LunID).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          alert("Error Updating Lun!!")
        }
      })

    }
}


