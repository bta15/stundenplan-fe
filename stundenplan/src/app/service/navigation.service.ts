import {Injectable} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private authService: AuthService, private router: Router) {
  }

  navigateToLogin(): void {
    this.router.navigate(["login"])
  }

  navigateToHome(): void {
    switch (this.authService.getUserrole()) {
      case "verwalter":
        this.router.navigate(["management"])
        break
      case "schule":
        this.router.navigate(["schule"])
        break
      default:
        this.router.navigate(["login"])
        break
    }
  }

  navigateToFach(): void {
    this.router.navigate(["fach"])
  }
}
