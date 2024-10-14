import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {NavigationService} from "../service/navigation.service";

@Injectable({providedIn: 'root'})
export class AuthGuard {
  constructor(private authService: AuthService, private navigationService: NavigationService) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.navigationService.navigateToLogin()
      return false;
    }
  }

}
