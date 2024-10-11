import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-management',
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
  onAddFach(): void {

  }

  onShowAllFachList(): void {

  }

  onAddSchule(): void {

  }

  onShowAllSchuleList(): void {

  }
}
