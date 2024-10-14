import {Routes} from '@angular/router';
import {SchuleListComponent} from "./schule-list/schule-list.component";
import {FachListComponent} from "./fach-list/fach-list.component";
import {LoginComponent} from "./login/login.component";
import {inject} from "@angular/core";
import {AuthGuard} from "./auth/auth-guard";
import {ManagementComponent} from "./management/management.component";
import {StundenplanManagerComponent} from "./stundenplan-manager/stundenplan-manager.component";

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
    component: SchuleListComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: "fach",
    component: FachListComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
  {
    path: "stundenplan-manager",
    component: StundenplanManagerComponent,
    canActivate: [() => inject(AuthGuard).canActivate()]
  },
];
