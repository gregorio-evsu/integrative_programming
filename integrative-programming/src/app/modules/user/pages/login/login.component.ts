import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFg: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor() {}

  public submitLogin() {
    console.log('validate login')
    console.log(this.loginFg.value)

    // TODO: Create service for Login validation and API call
  }



  get username() {
    return this.loginFg.get('username')
  }

  get password() {
    return this.loginFg.get('password')
  }
}
