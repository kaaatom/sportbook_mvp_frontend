import { FC, ReactNode, memo } from 'react';

import cn from 'classnames';
import { UseTableInstanceProps, TableInstance } from 'react-table';

import { TableRow } from '.';
import styles from './styles.module.scss';

export type Props = {
  getTableBodyProps: UseTableInstanceProps<any>['getTableBodyProps'];
  rows: TableInstance['rows'];
  children: (rows: TableRow<any>[]) => ReactNode;
  className?: string;
};

export const TableBody: FC<Props> = ({
  getTableBodyProps,
  rows,
  className,
  children,
}) => {
  const rowsToRender: TableRow<any>[] = (() => rows)();

  return (
    <tbody {...getTableBodyProps()} className={cn(styles.tbody, className)}>
      {children(rowsToRender)}
    </tbody>
  );
};

export const MemoizedTableBody = memo<Props>((props) => (
  <TableBody {...props} />
));
