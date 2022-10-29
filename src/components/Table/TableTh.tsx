import { FC, DOMAttributes } from 'react';

import cn from 'classnames';
import { ColumnInstance } from 'react-table';

import styles from './styles.module.scss';

export type Props = {
  className?: string;
  column: ColumnInstance;
} & DOMAttributes<HTMLTableHeaderCellElement>;

export const TableTh: FC<Props> = ({
  column,
  className,
  onClick,
  ...rProps
}) => (
  <th
    style={{
      width: column.width,
      maxWidth: column.maxWidth,
    }}
    className={cn(styles.th, className)}
    onClick={onClick}
    {...rProps}
  >
    <div className={styles.sortWrap}>
      {column.render('Header')}
      <span
        className={cn(styles.sortArrows, {
          [styles.hidden]: !column.canSort,
          [styles.asc]: column.isSorted && column.isSortedDesc,
          [styles.desc]: column.isSorted && !column.isSortedDesc,
        })}
      />
    </div>
  </th>
);
