import { Routes, Router } from '@angular/router';

import { user } from './user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";
import { NgForm } from "@angular/forms/";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: user;
  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit() {
  }
  onLogin(form:NgForm)
{
    const value=form.value;
    this.user=new user(value.username,value.password);
   let m=this.loginService.Login(this.user).subscribe(res=>{
      if(res===true)
      this.router.navigate(['/welcome']);
      else
      this.router.navigate(['/login']);
    });
  }
}
