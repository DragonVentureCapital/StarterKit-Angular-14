import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/shared/services/example.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  public tableData: any;
  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.exampleService.getTableData().subscribe((data) => {
      this.tableData = data;
    });
  }
}
