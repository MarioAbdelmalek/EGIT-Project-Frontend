import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtToken } from '../jwt-token';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private jwtToken!: JwtToken;
  loginForm!: FormGroup;
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.formBuilder = formBuilder;
  }

  userLogin() {
    this.userService.userLogin(this.loginForm.value).subscribe(({
      next: (res) => {
        this.jwtToken = res;

        if (this.jwtToken.IsValid === false) {
          alert(this.jwtToken.Response);
        }

        else {
          localStorage.setItem('user_token', this.jwtToken.Token);
          alert(this.jwtToken.Response);
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
