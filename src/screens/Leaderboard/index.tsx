import { FC, useMemo } from 'react';

import { SearchInput, Table } from '../../components';
import { TABLE_DATA } from './data';
import styles from './styles.module.scss';

type TableObject = {
  data: {
    id: string;
    address: string;
    bets: string;
    waggered: string;
    bets_won: string;
    won: string;
    staked: string;
  }[];
  user: {
    id: string;
    address: string;
    bets: string;
    waggered: string;
    bets_won: string;
    won: string;
    staked: string;
  };
};

export const Leaderboard: FC = () => {
  const tableData = TABLE_DATA as TableObject;
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        width: '7,06%',
      },
      {
        Header: 'Address',
        accessor: 'address',
        id: 'address',
        width: '17,1%',
        Cell: ({ row }: any) => {
          if (!row.values?.address) return null;

          return (
            <div id={row.values?.address} className={styles.addressWrap}>
              <span>{row.values?.address?.slice(0, 5)}</span>
              ...
              <div>{row.values?.address?.slice(-4)}</div>
              <span
                className={styles.copy}
                onClick={() => {
                  navigator.clipboard.writeText(row.values?.address);
                }}
              />
            </div>
          );
        },
      },
      {
        Header: 'Total\nbets',
        accessor: 'bets',
        id: 'bets',
        width: '15,168%',
      },
      {
        Header: 'Total\nwaggered',
        accessor: 'waggered',
        id: 'waggered',
        width: '15,168%',
        Cell: ({ row }: any) => {
          if (!row.values?.waggered) return null;
          let betStr = 'bets';
          if (parseInt(row.values.waggered) == 1) {
            betStr = 'bet';
          }

          return (
            <div>
              <p>{`${row.values.waggered} ${betStr}`}</p>
            </div>
          );
        },
      },
      {
        Header: 'Total\nbets won',
        accessor: 'bets_won',
        id: 'bets_won',
        width: '15,168%',
      },
      {
        Header: 'Total\nwon',
        accessor: 'won',
        id: 'won',
        width: '15,168%',
        Cell: ({ row }: any) => {
          if (!row.values?.won) return null;
          let betStr = 'bets';
          if (parseInt(row.values.won) == 1) {
            betStr = 'bet';
          }

          return (
            <div>
              <p>{`${row.values.won} ${betStr}`}</p>
            </div>
          );
        },
      },
      {
        Header: 'Total\nstaked',
        accessor: 'staked',
        id: 'staked',
        width: '15,168%',
        Cell: ({ row }: any) => {
          if (!row.values?.staked) return null;
          let betStr = 'bets';
          if (parseInt(row.values.staked) == 1) {
            betStr = 'bet';
          }

          return (
            <div>
              <p>{`${row.values.staked} ${betStr}`}</p>
            </div>
          );
        },
      },
    ],
    [tableData]
  );

  return (
    <section className={styles.content}>
      <SearchInput
        className={styles.search}
        id={`search-leaderboard`}
        placeholder="Enter the address"
      />
      <article className={styles.tableWrap}>
        <Table
          columns={columns}
          data={
            tableData?.data
              ? tableData?.data
              : [
                  {
                    id: '-',
                    address: '',
                    bets: '0',
                    waggered: '0',
                    bets_won: '0',
                    won: '0',
                    staked: '0',
                  },
                ]
          }
          userData={
            tableData?.user
              ? tableData!.user!
              : {
                  id: '—',
                  address: '0xD67B4379590c027228906b851Fd86A35A2E20290',
                  sacrifice: 0,
                  multiplier: '—',
                  sacrifice_point: 0,
                  tx_url: '-',
                }
          }
          isLoading={false}
          noDataMessage="No data found"
        />
      </article>
    </section>
  );
};
