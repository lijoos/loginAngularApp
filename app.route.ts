import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTE_PROVIDER: Routes =[
{path:'', component:LoginComponent},
{path:'login', component:LoginComponent},
{path:'welcome', component:WelcomeComponent},  

];
export const routing= RouterModule.forRoot(APP_ROUTE_PROVIDER);


