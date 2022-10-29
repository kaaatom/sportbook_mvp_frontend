import { memo, FC } from 'react';

import { HeaderGroup } from 'react-table';
import cn from 'classnames';

import { TableTh } from '.';
import styles from './styles.module.scss';

export type Props = {
  className?: string;
  classNameRow?: string;
  classNameTH?: string;
  groups: HeaderGroup[];
};

export const TableHead: FC<Props> = ({
  className,
  classNameRow,
  classNameTH,
  groups,
}) => (
  <thead className={cn(styles.thead, className)}>
    {groups.map((headerGroup, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <tr
        {...headerGroup.getHeaderGroupProps()}
        key={index}
        className={cn(classNameRow, styles.tr)}
      >
        {headerGroup.headers.map((column) => (
          <TableTh
            className={classNameTH}
            key={column.id}
            column={{
              ...column,
            }}
          />
        ))}
      </tr>
    ))}
  </thead>
);

export const MemoizedTableHead = memo<Props>((props) => (
  <TableHead {...props} />
));

TableHead.displayName = 'TableHead';
MemoizedTableHead.displayName = 'MemoizedTableHead';
