import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunComponent } from './lun/lun.component';
import { UpdateLunComponent } from './lun/update-lun/update-lun.component';
import { ViewLunsComponent } from './lun/view-luns/view-luns.component';
import { MainComponent } from './main.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path: 'viewLuns' , component:ViewLunsComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
