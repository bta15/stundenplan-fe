import {Component} from '@angular/core';
import {FachService} from "../service/fach.service";
import {Fach} from "../model/fach";
import {MatCardModule} from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {CustomButton} from "../shared/custom-button.component";
import {CustomDialog} from "../shared/dialog/custom-dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddFachDialogComponent} from "./add-fach-dialog.component";

@Component({
  selector: 'stundenplan-fach-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    CustomButton,
    CustomDialog
  ],
  templateUrl: './fach-list.component.html',
})
export class FachListComponent {
  fachList!: Fach[];
  dataSource = new MatTableDataSource<Fach>(this.fachList);
  displayedColumns: string[] = ['bezeichnung'];


  constructor(private fachService: FachService, private dialog: MatDialog) {
    this.reloadTableData()
  }

  openAddFachDialog(): void {
    const dialogRef = this.dialog.open(AddFachDialogComponent, {
      data: {dialogTitle: "Neues Fach hinzufügen"}
    });
    dialogRef.afterClosed().subscribe( result => {
      this.reloadTableData()
    })
  }

  private reloadTableData(): void {
    this.fachService.getFachList().subscribe(response => {
      this.fachList = response
      this.dataSource.data = response
    })
  }

}

export interface DialogData {
  dialogTitle: string
}
