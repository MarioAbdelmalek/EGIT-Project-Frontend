import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  vmService: VMService;
  vmNode: any;
  vmToBeUpdated: any;


  constructor(formBuilder: FormBuilder, nodeService: NodeService,
    vmService: VMService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateVMComponent>) {
    this.formBuilder = formBuilder;
    this.nodeService = nodeService;
    this.vmService = vmService;
  }

  updateVM() {
    debugger;
    this.vmService.updateVM(this.vmToBeUpdated.VMID, this.vmForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.dialogRef.close();
        location.reload();
      },
      error: () => {
        alert("Error Updating The VM!!");
      }
    })
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

  ngOnInit(): void {
    this.vmToBeUpdated = this.data['vmToBeUpdated'];
    this.getNodeByID(this.data['VMNodeID']);

    this.vmForm = this.formBuilder.group({
      CPUCores: ['', Validators.required],
      RAM: ['', Validators.required],
      Storage: ['', Validators.required],
      LunID: ['', Validators.required]
    });

    if (this.data) {
      this.vmForm.controls['CPUCores'].setValue(this.data['vmToBeUpdated'].CPUCores);
      this.vmForm.controls['RAM'].setValue(this.data['vmToBeUpdated'].RAM);
      this.vmForm.controls['Storage'].setValue(this.data['vmToBeUpdated'].Storage);
      this.vmForm.controls['LunID'].setValue(this.data['vmToBeUpdated'].LunID);
    }
  }

}
