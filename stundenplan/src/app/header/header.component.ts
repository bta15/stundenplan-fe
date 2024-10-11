import {Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../auth/auth-service";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'stundenplan-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIcon,
    MatButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService: AuthService, private  router: Router) {
  }

  onLogout() {
    this.authService.logout()
    this.router.navigate(["login"])
  }

}
