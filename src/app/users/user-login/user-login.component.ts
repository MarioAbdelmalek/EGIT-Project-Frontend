import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtToken } from '../jwt-token';
import { UserService } from '../user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private jwtToken!: JwtToken;
  loginForm!: FormGroup;
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder, private userService: UserService, private router: Router, private toast: NgToastService) {
    this.formBuilder = formBuilder;
  }

  userLogin() {
    this.userService.userLogin(this.loginForm.value).subscribe(({
      next: (res) => {
        this.jwtToken = res;

        if (this.jwtToken.IsValid === false) {
          this.toast.error({ detail: "Error", summary: this.jwtToken.Response, duration: 4000 });
        }

        else {
          localStorage.setItem('user_token', this.jwtToken.Token);
          this.toast.success({ detail: "Success", summary: this.jwtToken.Response, duration: 4000 });
          this.router.navigate(['home']);
        }

      },
      error: (err) => {
        console.log(err);
      }
    }))
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

}
