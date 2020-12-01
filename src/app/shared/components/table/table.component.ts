import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any[] = [
    {id: 1, name: 'teste'},
    {id: 2, name: 'teste2'}
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.paginator);
  }

  paginaTrocada(pagina: any) {
    console.log(pagina);
  }

}
