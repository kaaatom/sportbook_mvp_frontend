import { FC, useMemo, useState } from 'react';

import Modal from 'react-modal';
import cn from 'classnames';

import { CardContainer } from '../../containers';
import {
  DoubleChart,
  SearchInput,
  NumericInput,
  Table,
  Button,
} from '../../components';
import { TABLE_TOP_STAKING_DATA, CHART_DATA } from './data';
import styles from './styles.module.scss';

type TableObject = {
  data: {
    id: string;
    address: string;
    staked: string;
    pool: string;
    income: string;
  }[];
  user: {
    id: string;
    address: string;
    staked: string;
    pool: string;
    income: string;
  };
};

export const Staking: FC = () => {
  const tableData = TABLE_TOP_STAKING_DATA as TableObject;
  const labels = ['January', 'February', 'March', 'April', 'May'];
  const [currentTab, setCurrentTab] = useState<string>('stake');
  const [value, setValue] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        width: '8.08%',
      },
      {
        Header: 'Address',
        accessor: 'address',
        id: 'address',
        width: '22,98%',
        Cell: ({ row }: any) => {
          if (!row.values?.address) return null;

          return (
            <div id={row.values?.address} className={styles.addressWrap}>
              <span>{row.values?.address?.slice(0, 5)}</span>
              ...
              <div>{row.values?.address?.slice(-4)}</div>
            </div>
          );
        },
      },
      {
        Header: 'Staked',
        accessor: 'staked',
        id: 'staked',
        width: '22,98%',
      },
      {
        Header: '% Pool',
        accessor: 'pool',
        id: 'pool',
        width: '22,98%',
        Cell: ({ row }: any) => {
          if (!row.values?.pool) return null;

          return <p>{`${row.values.pool}%`}</p>;
        },
      },
      {
        Header: 'Total\nincome',
        accessor: 'income',
        id: 'income',
        width: '22,98%',
        Cell: ({ row }: any) => {
          if (!row.values?.income) return null;
          let betStr = 'bets';
          if (parseInt(row.values.income) == 1) {
            betStr = 'bet';
          }

          return <p>{`${row.values.income} ${betStr}`}</p>;
        },
      },
    ],
    [tableData]
  );

  return (
    <section className={styles.content}>
      <article className={styles.sectionOne}>
        <article className={styles.top}>
          <h3>TOP 10 STAKERS</h3>
          <SearchInput
            className={styles.search}
            id={`search-staking`}
            placeholder="Enter the address"
          />
        </article>
        <article className={styles.tableWrap}>
          <Table
            classNameScroll={styles.contentScroll}
            classNameTable={styles.table}
            columns={columns}
            data={tableData.data}
            userData={tableData.user}
          />
        </article>
      </article>
      <article className={styles.sectionTwo}>
        <article className={styles.chartWrap}>
          <h3>POOL VOLUME</h3>
          <DoubleChart
            className={styles.chart}
            labels={labels}
            first={CHART_DATA.first}
            second={CHART_DATA.second}
          />
        </article>
        <article className={styles.statsBlock}>
          <article className={styles.block}>
            <h3>POOL STATS</h3>
            <section className={styles.item}>
              <p>Total staked:</p>
              <span>3456 BETS</span>
            </section>
            <section className={styles.item}>
              <p>You staked:</p>
              <span>3456 BETS</span>
            </section>
            <section className={styles.item}>
              <p>Your share in pool:</p>
              <span>3456 BETS</span>
            </section>
          </article>
          <article className={styles.block}>
            <h3>Last month income</h3>
            <section className={styles.item}>
              <p>Pool income:</p>
              <span>3,200 $ in BETS</span>
            </section>
            <section className={styles.item}>
              <p>Your income:</p>
              <span>320 $ in BETS</span>
            </section>
            <section className={styles.item}>
              <p>Your % income:</p>
              <span>12% in BETS</span>
            </section>
          </article>
        </article>
        <article>
          <section className={styles.tabs}>
            <p
              className={cn(
                styles.tab,
                currentTab === 'stake' && styles.active
              )}
              onClick={() => setCurrentTab('stake')}
            >
              stake
            </p>
            <p
              className={cn(
                styles.tab,
                currentTab === 'withdraw' && styles.active
              )}
              onClick={() => setCurrentTab('withdraw')}
            >
              withdraw
            </p>
          </section>
          <section className={styles.inputBlock}>
            <p>{`How much do you want to ${currentTab}?`}</p>
            <section>
              <div className={styles.input}>
                <NumericInput
                  id={`numeric-input-staking`}
                  value={value}
                  setValue={setValue}
                />
              </div>
              <Button
                className={styles.button}
                type="large"
                color="green"
                onClick={() => setOpen(true)}
              >
                {currentTab.toUpperCase()}
              </Button>
            </section>
          </section>
        </article>
      </article>
      <Modal
        className={styles.transactionDialog}
        isOpen={isOpen}
        overlayClassName={styles.overlay}
      >
        <CardContainer className={styles.modal}>
          <div>
            <section className={styles.header}>
              <h3>Approve your transaction</h3>
              <p>{`Are you sure you want to ${currentTab} $ ${value}`}</p>
            </section>
            <div className={styles.separator} />
            <section className={styles.buttonBlock}>
              <Button
                className={styles.button}
                type="empty"
                color="transparent"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className={styles.button}
                type="large"
                color="green"
                onClick={() => setOpen(false)}
              >
                {currentTab}
              </Button>
            </section>
            <Button
              className={styles.close}
              type="close"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </CardContainer>
      </Modal>
    </section>
  );
};
