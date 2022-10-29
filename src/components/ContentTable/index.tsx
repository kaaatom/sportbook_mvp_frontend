import { FC } from 'react';

import cn from 'classnames';
import { useTable } from 'react-table';

import { TableProps, TableBody, TableHead, Row } from '../Table';
import styles from './styles.module.scss';

export const ContentTable: FC<TableProps> = ({
  columns,
  className,
  classNameHeaderRow,
  classNameTable,
  classNameRow,
  data,
  pageSize = 50,
}) => {
  const { getTableProps, headerGroups, getTableBodyProps, prepareRow, rows } =
    useTable({
      columns,
      data,
      useControlledState: (defaultState) => ({
        ...defaultState,
        pageSize: pageSize || defaultState.pageSize,
      }),
    });

  return (
    <div className={cn(styles.tableWrap, className)}>
      <div className={styles.tableHeadContainer}>
        <table
          {...getTableProps({ className: cn(styles.table, classNameTable) })}
        >
          <TableHead
            className={cn(styles.thead)}
            classNameRow={classNameHeaderRow}
            classNameTH={styles.tableHead}
            groups={headerGroups}
          />

          <TableBody
            className={styles.tbody}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
          >
            {(rows) =>
              rows.map((row) => {
                prepareRow(row);
                return (
                  <>
                    <Row key={row.id} row={row} className={classNameRow} />
                    <tr className={styles.borderTr} key={`key-${row.id}`}>
                      <td className={styles.borderTd} />
                    </tr>
                  </>
                );
              })
            }
          </TableBody>
        </table>

        <div className={styles.border} />
      </div>
    </div>
  );
};
