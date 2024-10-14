import {Routes} from '@angular/router';
import {SchuleComponent} from "./schule/schule.component";
import {FachComponent} from "./fach/fach.component";
import {LoginComponent} from "./login/login.component";
import {inject} from "@angular/core";
import {AuthGuard} from "./auth/auth-guard";
import {ManagementComponent} from "./management/management.component";

export const routes: Routes = [
  {
    path:"",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "management",
    component: ManagementComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: "schule",
    component: SchuleComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: "fach",
    component: FachComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  }
];
