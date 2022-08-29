import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm!: FormGroup;
  formBuilder: FormBuilder;
  clientService: ClientService;

  constructor(formBuilder: FormBuilder, clientService: ClientService,
    private dialogRef: MatDialogRef<AddClientComponent>) {
    this.formBuilder = formBuilder;
    this.clientService = clientService;
  }

  addClient() {
    this.clientService.addClient(this.clientForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Adding The Client!!")
      }
    })
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      ClientName: ['', Validators.required],
      ClientSector: ['', Validators.required],
      ISPID: ['', Validators.required]
    })
  }

}
