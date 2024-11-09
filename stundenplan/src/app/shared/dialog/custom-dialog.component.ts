import {Component, EventEmitter, Inject, Output} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CustomButtonComponent} from "../button/custom-button.component";
import {DialogData} from "../../fach-list/fach-list.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'stundenplan-custom-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CustomButtonComponent
  ],
  templateUrl: './custom-dialog.component.html',
})
export class CustomDialogComponent {

  dialogTitle!: string;

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: DialogData) {
    this.dialogTitle = data.dialogTitle
  }

  @Output() clickOk: EventEmitter<Event> = new EventEmitter<Event>();

  ok(event: Event) {
    this.clickOk.next(event)
    this.dialogRef.close()
  }

  close(): void {
    this.dialogRef.close()
  }
}
