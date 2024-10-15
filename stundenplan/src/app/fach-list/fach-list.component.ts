import {Component} from '@angular/core';
import {FachService} from "../service/fach.service";
import {FachResponse} from "../model/fach-response";
import {MatCardModule} from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";

@Component({
  selector: 'stundenplan-fach-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './fach-list.component.html',
})
export class FachListComponent {
  fachList!: FachResponse[];
  dataSource = new MatTableDataSource<FachResponse>(this.fachList);
  displayedColumns: string[] = ['bezeichnung'];

  constructor(private fachService: FachService) {
    this.fachService.getFachList().subscribe(response => {
      this.fachList = response
      this.dataSource.data = response
    })
  }

}
