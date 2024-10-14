import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService { //TODO später mit Backend umsetzen

  login(userrole: string) {
    localStorage.setItem("benutzerrolle", userrole);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("benutzerrolle")
  }

  getUserrole(): string | null {
    return localStorage.getItem("benutzerrolle")
  }

  logout(): void {
    localStorage.removeItem("benutzerrolle")
  }

}
