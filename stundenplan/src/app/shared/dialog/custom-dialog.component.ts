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
import {CustomButton} from "../custom-button.component";
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
    CustomButton
  ],
  templateUrl: './custom-dialog.component.html',
})
export class CustomDialog {

  dialogTitle!: string;

  constructor(private dialogRef: MatDialogRef<CustomDialog>,
              @Inject(MAT_DIALOG_DATA) data: DialogData) {
    this.dialogTitle = data.dialogTitle
  }

  @Output() onClickOk: EventEmitter<any> = new EventEmitter<any>();

  ok(event: any) {
    this.onClickOk.next(event)
    this.dialogRef.close()
  }

  close(): void {
    this.dialogRef.close()
  }
}
