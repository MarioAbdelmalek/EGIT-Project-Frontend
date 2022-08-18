import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

  userService: UserService;
  registrationForm!: FormGroup;
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder, userService: UserService, private router: Router) {
    this.userService = userService;
    this.formBuilder = formBuilder;
  }

  registerUser() {
    this.userService.registerUser(this.registrationForm.value).subscribe({
      next: () => {
        this.router.navigate(['']);
        alert("You Have Registered Successfully");
      },
      error: () => {
        alert("Cannot Register This User!")
      }
    })
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

}

