import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'stundenplan-custom-button',
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './custom-button.component.html',
})
export class CustomButtonComponent {

  @Input() label !: string;
  @Input() icon !: string;
  @Output() btnClick: EventEmitter<Event> = new EventEmitter<Event>();

  onClickButton(event: Event) {
    this.btnClick.next(event)
  }

}
