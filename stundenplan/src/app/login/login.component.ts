import {Component} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

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
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // selectedRolle!: Rolle;
  selectedRolleFormControl = new FormControl<Rolle | null>(null, Validators.required)
  rollen: Rolle[] = [{value: "verwalter", bezeichnung: "Verwalter"}, {value: "schule", bezeichnung: "Schule"}]

  constructor(private authService: AuthService, private router: Router) {

  }

  onLogin(): void {
    switch (this.selectedRolleFormControl.getRawValue()?.value) {
      case "verwalter":
        this.authService.login("verwalter")
        this.router.navigate(["/management"])
        break
      case "schule":
        this.authService.login("schule")
        this.router.navigate(["/schule"])
        break
    }
  }
}

interface Rolle {
  value: string
  bezeichnung: string
}
