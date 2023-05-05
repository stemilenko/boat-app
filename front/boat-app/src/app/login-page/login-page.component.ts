import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
             selector: 'app-login-page',
             templateUrl: './login-page.component.html',
             styleUrls: ['./login-page.component.css']
           })
export class LoginPageComponent{

  credentialsForm: FormGroup;
  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService) {
    this.initFormGroup();
  }

  submit() {
    this.userService.authenticate(this.username, this.password).subscribe(() => this.router.navigateByUrl('/boat-list'));
  }

  get usernameCtrl() {
    return this.credentialsForm.get('username');
  }

  get passwordCtrl() {
    return this.credentialsForm.get('password');
  }

  changeUsername(event: any) {
    this.username = event.target.value;
  }

  changePassword(event: any) {
    this.password = event.target.value;
  }

  private initFormGroup() {
    this.credentialsForm = new FormGroup({
                                           username: new FormControl(this.username, Validators.required),
                                           password: new FormControl(this.password, Validators.required)
                                         });
  }

}
