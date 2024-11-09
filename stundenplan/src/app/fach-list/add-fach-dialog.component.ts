import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "./fach-list.component";
import {CustomDialogComponent} from "../shared/dialog/custom-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {FachService} from "../service/fach.service";

@Component({
  selector: 'stundenplan-add-fach',
  standalone: true,
  imports: [
    CustomDialogComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './add-fach-dialog.component.html',
})
export class AddFachDialogComponent {
  dialogTitle!: string;
  fachBezeichnung!: string;

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: DialogData,
              private fachService: FachService) {
    this.dialogTitle = data.dialogTitle
  }

  saveFach(): void {
    console.log("save klicked " + this.fachBezeichnung)
    this.fachService.createFach({bezeichnung: this.fachBezeichnung}).subscribe()
  }


}
