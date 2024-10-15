import {Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../auth/auth.service";
import {MatAnchor, MatButton, MatFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {NavigationService} from "../service/navigation.service";

@Component({
  selector: 'stundenplan-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIcon,
    MatButton,
    MatTooltip,
    MatAnchor,
    MatFabButton
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private authService: AuthService, private navigationService: NavigationService) {
  }

  onLogout(): void {
    this.authService.logout()
    this.navigationService.navigateToLogin()
  }

  navigateToHome() {
    this.navigationService.navigateToHome()
  }

}
