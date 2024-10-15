import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NavigationService} from "../service/navigation.service";
import {CustomButton} from "../shared/custom-button.component";

@Component({
  selector: 'stundenplan-management',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    CustomButton
  ],
  templateUrl: './management.component.html',
})
export class ManagementComponent {

  constructor(private navigationService: NavigationService) {
  }

  onShowAllFachList(): void {
    this.navigationService.navigateToFachList()
  }

  onShowAllSchuleList(): void {
    this.navigationService.navigateToSchuleList()
  }
}
