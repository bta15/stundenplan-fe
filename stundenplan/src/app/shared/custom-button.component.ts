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
export class CustomButton {

  @Input() label !: string;
  @Input() icon !: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.next(event)
  }

}
