import { FC, memo, useRef, useState } from 'react';

import cn from 'classnames';
import { useTable } from 'react-table';

import { useScroll } from '../../hooks';
import styles from './styles.module.scss';
import { TableProps, TableBody, TableHead, Row } from '.';
import { NoDataBanner } from '../NoData';
import { Preloader } from '../Preloader';

const SUB_ROW = {
  address: null,
  id: '...',
  multiplier: null,
  sacrifice: null,
  sacrifice_point: null,
  tx_url: null,
  isHover: true,
};

export const Table: FC<TableProps> = ({
  columns,
  className,
  classNameHeader,
  classNameHeaderRow,
  classNameHeaderTH,
  classNameTable,
  classNameRow,
  classNameScroll,
  data,
  userData,
  pageSize = 50,
  isLoading,
  noDataMessage,
  hideLastItem = false,
}) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refScrollContainer = useRef<HTMLTableElement>(null);

  const [isHideLastItem, setHideLastItem] = useState<boolean>(hideLastItem);

  const handleScroll = () => {
    if (refContainer?.current && refScrollContainer?.current) {
      if (
        refScrollContainer?.current?.offsetHeight &&
        refContainer?.current?.offsetHeight
      ) {
        setHideLastItem(false);
      }
    }
  };

  useScroll({ id: 'scrollTable', callback: handleScroll });

  const { getTableProps, headerGroups, getTableBodyProps, prepareRow, rows } =
    useTable({
      columns,
      data,
      useControlledState: (defaultState) => ({
        ...defaultState,
        pageSize: pageSize || defaultState.pageSize,
      }),
    });

  console.log(userData);

  const { rows: subRows } = useTable({
    columns,
    data: [SUB_ROW, userData],
  });

  return (
    <div className={cn(styles.tableWrap, className)}>
      <Preloader isLoading={!!isLoading} className={styles.loader}>
        {data.length === 0 ? (
          <NoDataBanner
            title={noDataMessage || ''}
            className={cn(styles.noData, {
              [styles.hidden]: !noDataMessage,
            })}
          />
        ) : (
          <>
            <div id="scrollTable" ref={refContainer}>
              <div
                className={cn(styles.scrollBodyContainer, classNameScroll, {
                  [styles.showLastItem]: isHideLastItem,
                })}
              >
                <table
                  {...getTableProps({
                    className: cn(styles.table, classNameTable),
                  })}
                  ref={refScrollContainer}
                >
                  <TableHead
                    className={cn(styles.header, classNameHeader)}
                    classNameRow={classNameHeaderRow}
                    classNameTH={classNameHeaderTH}
                    groups={headerGroups}
                  />
                  <TableBody
                    className={classNameTable}
                    getTableBodyProps={getTableBodyProps}
                    rows={rows}
                  >
                    {(rows) =>
                      rows.map((row) => {
                        prepareRow(row);
                        return (
                          <>
                            <Row
                              key={row.id}
                              row={row}
                              className={classNameRow}
                            />
                            <tr
                              className={styles.borderTr}
                              key={`key-${row.id}`}
                            >
                              <td className={styles.borderTd} />
                            </tr>
                          </>
                        );
                      })
                    }
                  </TableBody>
                </table>
              </div>
              <div
                className={cn(styles.lastItemContainer, {
                  [styles.hideLastItem]: isHideLastItem,
                })}
              >
                <table
                  {...getTableProps({
                    className: cn(styles.table, classNameTable),
                  })}
                >
                  <TableHead
                    className={styles.tableHeadHide}
                    classNameRow={classNameHeaderRow}
                    classNameTH={classNameHeaderTH}
                    groups={headerGroups}
                  />
                  <TableBody
                    getTableBodyProps={getTableBodyProps}
                    rows={subRows}
                  >
                    {(userData) =>
                      userData.map((row) => {
                        prepareRow(row);
                        return (
                          <>
                            <Row
                              key={row.id}
                              row={row}
                              isHover={!row.original?.isHover}
                              className={classNameRow}
                            />
                            <tr
                              className={styles.borderTr}
                              key={`key--${row.id}`}
                            >
                              <td className={styles.borderTd} />
                            </tr>
                          </>
                        );
                      })
                    }
                  </TableBody>
                </table>
              </div>
            </div>
          </>
        )}
      </Preloader>
    </div>
  );
};

export const MemoizedTable = memo<TableProps>((props) => <Table {...props} />);
