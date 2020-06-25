import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInterface } from 'app/interfaces/usuario';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router, private location: Location) { }
    private user: UserInterface = {
      email: '',
      password: ''
    };
    public isError = false;
  
    ngOnInit() { }
  
    onLogin(form: NgForm) {
      if (form.valid) {
        return this.authService
          .loginuser(this.user.email, this.user.password)
          .subscribe(
          data => {
            this.authService.setUser(data.user);
            const token = data.id;
            this.authService.setToken(token);
            this.router.navigate(['/shop']);
            this.isError = false;
          },
          error => this.onIsError()
          );
      } else {
        this.onIsError();
      }
    }
  
    onIsError(): void {
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 4000);
    }
  
  
  }
