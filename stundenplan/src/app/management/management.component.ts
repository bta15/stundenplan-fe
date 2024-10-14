import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NavigationService} from "../service/navigation.service";

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
    MatIcon
  ],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {

  constructor(private navigationService: NavigationService) {
  }

  onAddFach(): void {

  }

  onShowAllFachList(): void {
    this.navigationService.navigateToFachList()
  }

  onAddSchule(): void {

  }

  onShowAllSchuleList(): void {
    this.navigationService.navigateToSchuleList()
  }
}
