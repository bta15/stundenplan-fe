import {Component} from '@angular/core';
import {FachService} from "../service/fach.service";
import {FachResponse} from "../model/fach-response";
import {MatCardModule} from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";

@Component({
  selector: 'stundenplan-fach',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './fach.component.html',
  styleUrl: './fach.component.css'
})
export class FachComponent {
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
