import {Component} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {Schule} from "../model/schule";
import {SchuleService} from "../service/schule.service";
import {MatDialogModule} from "@angular/material/dialog";
import {CustomButtonComponent} from "../shared/button/custom-button.component";
import {CustomDialogComponent} from "../shared/dialog/custom-dialog.component";

@Component({
  selector: 'stundenplan-schule-list',
  standalone: true,
  imports: [
    MatCard,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    CustomButtonComponent,
    CustomDialogComponent
  ],
  templateUrl: './schule-list.component.html',
})
export class SchuleListComponent {
  schuleList!: Schule[];
  dataSource = new MatTableDataSource<Schule>(this.schuleList);
  displayedColumns: string[] = ['schulname'];


  constructor(private schuleService: SchuleService) {
    this.reloadTableData();
  }

  private reloadTableData(): void {
    this.schuleService.getAllSchulen().subscribe(response => {
      this.schuleList = response
      this.dataSource.data = response
    })
  }

}
