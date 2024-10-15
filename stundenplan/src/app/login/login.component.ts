import {Component} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NavigationService} from "../service/navigation.service";
import {CustomButton} from "../shared/custom-button.component";

@Component({
  selector: 'stundenplan-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    ReactiveFormsModule,
    CustomButton,
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
