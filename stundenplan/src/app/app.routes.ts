import {Routes} from '@angular/router';
import {SchuleComponent} from "./schule/schule.component";
import {FachComponent} from "./fach/fach.component";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {inject} from "@angular/core";
import {AuthGuard} from "./auth/auth-guard";
import {ManagementComponent} from "./management/management.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: AppComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: "management",
    component: ManagementComponent,
  },
  {
    path: "schule",
    component: SchuleComponent
  },
  {
    path: "fach",
    component: FachComponent
  }
];
