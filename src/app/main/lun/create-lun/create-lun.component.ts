import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateLunDto } from 'src/Models/CreateLunDto';
import { LunService } from '../../lun.service';
import { ViewStorageLunsComponent } from '../../storages/view-storage-luns/view-storage-luns.component';
import { ViewLunsComponent } from '../view-luns/view-luns.component';

@Component({
  selector: 'app-create-lun',
  templateUrl: './create-lun.component.html',
  styleUrls: ['./create-lun.component.css']
})
export class CreateLunComponent implements OnInit {

  lunForm!: FormGroup;

  constructor(private lunService:LunService,private formBuilder:FormBuilder,
    private dialogRef: MatDialogRef<ViewStorageLunsComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number) { }

  ngOnInit(): void {
    this.lunForm=this.formBuilder.group({
      LunName : ['', Validators.required],
      LunTotalSpace : ['', Validators.required],
      StorageID:[+this.id,Validators.required]
  });

  }
  
  CreateLun(){
    this.lunService.AddLun(this.lunForm.value).subscribe({
      next: () => {
        console.log(this.lunForm.value);
        this.dialogRef.close();
      },
      error: () => {
        console.log(this.lunForm.value);
        alert("Error Creating Lun!!")
      }
    })
  }
}
