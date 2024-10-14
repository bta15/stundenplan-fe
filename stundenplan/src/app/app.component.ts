import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "./header/header.component";
import {MatButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'stundenplan-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatIconModule, HeaderComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
  }
}
