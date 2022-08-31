import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  clientForm!: FormGroup;
  formBuilder: FormBuilder;
  clientService: ClientService;

  constructor(formBuilder: FormBuilder, clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateClientComponent>) {
    this.formBuilder = formBuilder;
    this.clientService = clientService;
  }

  updateClient() {
    this.clientService.updateClient(this.data['clientToBeUpdated'].ClientID, this.clientForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Updating The Client!!")
      }
    })

  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      ClientName: ['', Validators.required],
      ClientSector: ['', Validators.required],
      ISPID: ['', Validators.required]
    });

    if (this.data['clientToBeUpdated']) {
      this.clientForm.controls['ClientName'].setValue(this.data['clientToBeUpdated'].ClientName);
      this.clientForm.controls['ClientSector'].setValue(this.data['clientToBeUpdated'].ClientSector);
      this.clientForm.controls['ISPID'].setValue(this.data['clientToBeUpdated'].ISPID);
    }
  }

}
