import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../clients/client.service';
import { LunService } from '../../luns/lun.service';
import { NodeService } from '../../nodes/node.service';
import { VMService } from '../vm.service';

@Component({
  selector: 'app-create-vm',
  templateUrl: './create-vm.component.html',
  styleUrls: ['./create-vm.component.css']
})
export class CreateVMComponent implements OnInit {

  vmForm!: FormGroup;
  formBuilder: FormBuilder;
  vmService: VMService;
  clientService: ClientService;
  nodeService: NodeService;
  lunService: LunService;
  clientList: any;
  vmNode: any;
  lunList: any;

  constructor(formBuilder: FormBuilder, vmService: VMService, lunService: LunService, clientService: ClientService, nodeService: NodeService,
    @Inject(MAT_DIALOG_DATA) public nodeID: any,
    private dialogRef: MatDialogRef<CreateVMComponent>) {
    this.formBuilder = formBuilder;
    this.vmService = vmService;
    this.clientService = clientService;
    this.nodeService = nodeService;
    this.lunService = lunService;
  }

  addVM() {
    this.vmService.addVM(this.vmForm.value).subscribe({
      next: (res) => {
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Adding The VM!!")
      }
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe({
      next: (res: any) => {
        this.clientList = res;
      },
      error: () => {
        alert("Error While Fetching The Clients!!")
      }
    }
    );
  }

  getNodeByID(nodeID: any) {
    this.nodeService.getNodeByID(nodeID).subscribe({
      next: (res: any) => {
        this.vmNode = res;
      },
      error: () => {
        alert("Error While Getting The Node!!")
      }
    }
    );
  }

  getAllLuns() {
    this.lunService.getAllLuns().subscribe({
      next: (res: any) => {
        this.lunList = res;
      },
      error: () => {
        alert("Error While Fetching The Luns!!")
      }
    }
    );
  }

  ngOnInit(): void {
    this.getAllClients();
    this.getAllLuns();
    this.getNodeByID(this.nodeID);

    this.vmForm = this.formBuilder.group({
      NodeID: [+this.nodeID, Validators.required],
      ClientID: ['', Validators.required],
      LunID: ['', Validators.required],
      CPUCores: ['', Validators.required],
      Storage: ['', Validators.required],
      RAM: ['', Validators.required],
      Bandwidth: ['', Validators.required],
      IP: ['', Validators.required]
    })
  }

}
