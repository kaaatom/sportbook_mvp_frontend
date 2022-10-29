import { FC } from 'react';

import { Button, DoubleChart } from '../../components';
import { POOLS_DATA } from './data';
import styles from './styles.module.scss';

type BlockData = {
  header: string;
  first: {
    label: string;
    data: number[];
    borderColor: string;
  };
  second: {
    label: string;
    data: number[];
    borderColor: string;
  };
  stats?: string[];
  button?: string;
};

const labels = ['1', '2', '3', '4', '5'];

const getBlocks = (data: BlockData[]) =>
  data.map((value, index) => (
    <article key={`chart-block-${index}`}>
      <h3 className={styles.header}>{value.header}</h3>
      <DoubleChart
        className={styles.chart}
        labels={labels}
        first={value.first}
        second={value.second}
      />
      {value.stats !== undefined ? (
        <section className={styles.buyBlock}>
          <p className={styles.text}>
            {value.stats.map((value) => (value += '\n'))}
          </p>
          <Button className={styles.button} type="large" color="green">
            {value.button}
          </Button>
        </section>
      ) : (
        <p>Coming soon</p>
      )}
    </article>
  ));

export const Pools: FC = () => {
  const data = 1;

  return <section className={styles.content}>{getBlocks(POOLS_DATA)}</section>;
};
