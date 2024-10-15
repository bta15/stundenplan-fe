import {Component} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NavigationService} from "../service/navigation.service";

@Component({
  selector: 'stundenplan-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  // selectedRolle!: Rolle;
  selectedRolleFormControl = new FormControl<Rolle | null>(null, Validators.required)
  rollen: Rolle[] = [{value: "verwalter", bezeichnung: "Verwalter"}, {value: "schule", bezeichnung: "Schule"}]

  constructor(private authService: AuthService, private navigationService: NavigationService) {

  }

  onLogin(): void {
    switch (this.selectedRolleFormControl.getRawValue()?.value) {
      case "verwalter":
        this.authService.login("verwalter")
        break
      case "schule":
        this.authService.login("schule")
        break
    }
    this.navigationService.navigateToHome();
  }
}

interface Rolle {
  value: string
  bezeichnung: string
}
