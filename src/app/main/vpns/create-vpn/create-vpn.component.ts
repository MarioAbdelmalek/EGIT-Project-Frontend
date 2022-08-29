import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewVpnsComponent } from '../view-vpns/view-vpns.component';
import { VpnService } from '../vpn.service';

@Component({
  selector: 'app-create-vpn',
  templateUrl: './create-vpn.component.html',
  styleUrls: ['./create-vpn.component.css']
})
export class CreateVpnComponent implements OnInit {

  vpnForm!:FormGroup
  clientList:any;

  constructor(private vpnService:VpnService,private formBuilder:FormBuilder,
    private dialogRef: MatDialogRef<ViewVpnsComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number) { }

  ngOnInit(): void {
    this.vpnForm=this.formBuilder.group({
      Username : ['', Validators.required],
      ClientID:[+this.id,Validators.required]
    })

    this.getAllClients();
  }

  CreateVpn(){
    this.vpnService.AddVpn(this.vpnForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Creating VPN!!")
      }
    })
  }

  getAllClients(){
    this.vpnService.getAllClients().subscribe((res)=>{
      this.clientList=res;
    })
  }

}
