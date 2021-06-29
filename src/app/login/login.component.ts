import { HttpClient } from '@angular/common/http';
import { AbstractType, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; //

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get f() {
    return this.form.controls;
  }

  email!: string;
  password!: string;
  isSubmitted = false;
  error_message: any;

  constructor(private router: Router, private http: HttpClient, private AuthService: AuthService) { }

  ngOnInit(): void {

  }

  loginUser() {

    this.isSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    if ((this.form.value.email == "admin@gmail.com") && (this.form.value.password == "12345")) {

      this.AuthService.login();
      this.router.navigateByUrl('/dashboard',)

    } else {
      alert("Invalid username or password!")

      this.router.navigateByUrl('/',)
    }
  }

}
