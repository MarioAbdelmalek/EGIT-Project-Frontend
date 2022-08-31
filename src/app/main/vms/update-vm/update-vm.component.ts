import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LunService } from '../../luns/lun.service';
import { NodeService } from '../../nodes/node.service';
import { VMService } from '../vm.service';

@Component({
  selector: 'app-update-vm',
  templateUrl: './update-vm.component.html',
  styleUrls: ['./update-vm.component.css']
})
export class UpdateVMComponent implements OnInit {

  vmForm!: FormGroup;
  formBuilder: FormBuilder;
  nodeService: NodeService;
  lunService: LunService;
  vmService: VMService;
  vmNode: any;
  vmToBeUpdated: any;
  lunList: any;
  selectedLun: any;


  constructor(formBuilder: FormBuilder, nodeService: NodeService, lunService: LunService,
    vmService: VMService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateVMComponent>) {
    this.formBuilder = formBuilder;
    this.nodeService = nodeService;
    this.vmService = vmService;
    this.lunService = lunService;
  }

  updateVM() {
    this.vmService.updateVM(this.vmToBeUpdated.VMID, this.vmForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        alert("Error Updating The VM!!");
      }
    })
  }

  getAllLuns() {
    this.lunService.getAllLuns().subscribe({
      next: (res: any) => {
        this.lunList = res;
        this.populateUpdateForm();
      },
      error: () => {
        alert("Error While Fetching The Luns!!")
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

  getLunByID(lunID: any) {
    this.lunService.getLunByID(lunID).subscribe({
      next: (res: any) => {
        this.selectedLun = res;
      },
      error: () => {
        alert("Error While Getting The Lun!!")
      }
    }
    );
  }

  getSelectedLun(lunID: any) {
    this.getLunByID(lunID);
  }

  populateUpdateForm() {
    if (this.data) {
      this.vmForm.controls['CPUCores'].setValue(this.data['vmToBeUpdated'].CPUCores);
      this.vmForm.controls['RAM'].setValue(this.data['vmToBeUpdated'].RAM);
      //this.vmForm.controls['LunID'].setValue(this.data['vmToBeUpdated'].LunID);
      this.vmForm.controls['Storage'].setValue(this.data['vmToBeUpdated'].Storage);
    }
  }

  ngOnInit(): void {
    this.vmToBeUpdated = this.data['vmToBeUpdated'];
    this.getNodeByID(this.data['VMNodeID']);
    this.getAllLuns();

    this.vmForm = this.formBuilder.group({
      CPUCores: ['', Validators.required],
      RAM: ['', Validators.required],
      LunID: ['', Validators.required],
      Storage: ['', Validators.required]
    });
  }

}
