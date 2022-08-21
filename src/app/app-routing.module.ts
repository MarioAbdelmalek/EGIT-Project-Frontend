import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './users/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
