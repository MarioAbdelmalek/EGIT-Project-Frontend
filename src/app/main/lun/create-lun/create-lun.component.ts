import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LunService } from '../../lun.service';
import { ViewLunsComponent } from '../view-luns/view-luns.component';

@Component({
  selector: 'app-create-lun',
  templateUrl: './create-lun.component.html',
  styleUrls: ['./create-lun.component.css']
})
export class CreateLunComponent implements OnInit {

  lunForm!: FormGroup;

  constructor(private lunService:LunService,private formBuilder:FormBuilder,private dialogRef: MatDialogRef<ViewLunsComponent>) { }

  ngOnInit(): void {
    this.lunForm=this.formBuilder.group({
      LunID: ['', Validators.required],
      LunName : ['', Validators.required],
      LunType : ['', Validators.required],
      LunTSpace : ['', Validators.required],
      LunRSpace : ['', Validators.required],
      StorageID :['', Validators.required],
  });
  }

  CreateLun(){
    this.lunService.AddLun(this.lunForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Creating Lun!!")
      }
    })
  }
}
