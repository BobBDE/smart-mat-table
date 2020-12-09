import {Directive, Input} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';

export type TableColumn<T> = keyof T | string;

/**
 * Abstract directive for the Table component
 * It  supports dynamic columns in the HTML by providing the list of static column in the constructor
 */
@Directive()
export abstract class TableAbstractDirective<T> {

  @Input() datasource!: DataSource<T>;

  // tslint:disable-next-line:variable-name
  _columns!: TableColumn<T>[];

  // setter for columns to refresh the other columns attribute
  @Input() set columns(columns: TableColumn<T>[]) {
    this._columns = columns;

    // update other columns
    this.calculateDynamicColumns();
  }

  // contains the list of columns name that are not statically defined in the
  // table HTML under matColumnDef
  dynamicColumns: TableColumn<T>[] = [];

  /**
   * @param staticColumns list of columns name that are statically defined in the HTML in matColumnDef
   *                      all displayed columns not present in the static array will be referenced in the dynamic columns array
   *                      to generate dynamic column
   */
  protected constructor(protected staticColumns?: TableColumn<T>[]) {
    this.calculateDynamicColumns();
  }

  /**
   * Defined dynamicColumns based on displayed columns and static columns
   */
  public calculateDynamicColumns(): void {
    if (this._columns && this.staticColumns) {
      this.dynamicColumns = this.getDynamicColumns(this._columns, this.staticColumns);
    }
  }

  /**
   * Retrieve dynamic columns
   */
  public getDynamicColumns(columns: TableColumn<T>[], staticColumns: TableColumn<T>[]): TableColumn<T>[] {
    const dynamicColumns: TableColumn<T>[] = [];
    // loop though the columns to display
    for (const column of columns) {
      // if the column is not in the static list, add it to the dynamic list
      if (staticColumns.indexOf(column) === -1) {
        dynamicColumns.push(column);
      }
    }

    return dynamicColumns;
  }

}
