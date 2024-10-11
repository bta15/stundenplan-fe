import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth-service";

@Injectable({providedIn: 'root'})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
