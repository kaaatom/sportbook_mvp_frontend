import { LegacyRef, ReactNode } from 'react';

import {
  UseTableOptions,
  UseSortByState,
  UsePaginationState,
  Column,
  Cell,
  Row,
} from 'react-table';

export type TableColumn<D extends object = {}> = Column<D>;
export type TableCell<D extends object, V = any> = Cell<D, V>;
export type TableSortBy = UseSortByState<any>['sortBy'];
export type TableRow<D extends object> = Row<D>;

export type TableProps = {
  account?: string;
  isLoading?: boolean;
  className?: string;
  classNameTableWrap?: string;
  classNameHeader?: string;
  classNameHeaderRow?: string;
  classNameHeaderTH?: string;
  classNameTable?: string;
  classNameRow?: string;
  classNameScroll?: string;
  classNamePagination?: string;
  tableRef?: LegacyRef<HTMLTableElement> | null;
  columns: Array<TableColumn<any>>;
  data: UseTableOptions<any>['data'];
  userData?: any;
  initialSortBy?: TableSortBy;
  pageSize?: UsePaginationState<any>['pageSize'];
  manualPageIndex?: UsePaginationState<any>['pageIndex'];
  withPagination?: boolean;
  withSorting?: boolean;
  totalCount?: number;
  noDataMessage?: string | null;
  onPageChange?: (pageIndex: number) => void;
  onSortChange?: (sortBy: TableSortBy) => void;
  renderSubRow?: (row: TableRow<any>) => ReactNode;
  onRowClick?: (row: TableRow<any>) => void;
  hideLastItem?: boolean;
  overflow?: string;
};
