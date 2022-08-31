import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VpnService } from '../vpn.service';

@Component({
  selector: 'app-update-vpn',
  templateUrl: './update-vpn.component.html',
  styleUrls: ['./update-vpn.component.css']
})
export class UpdateVpnComponent implements OnInit {

  vpnForm!:FormGroup;
  clientList:any;

  constructor(private formBuilder: FormBuilder, private vpnService: VpnService,
    @Inject(MAT_DIALOG_DATA) public vpnToBeUpdated: any,
    private dialogRef: MatDialogRef<UpdateVpnComponent>) { }

  ngOnInit(): void {
    
    this.vpnForm=this.formBuilder.group({
      Username : [this.vpnToBeUpdated.Username, Validators.required],
      ClientID:[+this.vpnToBeUpdated.ClientID,Validators.required]
    })


    this.getAllClients();

  }

  UpdateVpns(){
    this.vpnService.UpdateVpn(this.vpnToBeUpdated.VpnID, this.vpnForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Updating The Vpn!!")
      }
    })
  }

  getAllClients(){
    this.vpnService.getAllClients().subscribe((res)=>{
      this.clientList=res;
    })
  }

}
