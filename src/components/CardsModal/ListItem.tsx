import { FC } from 'react';

import { ListItemProps, convertAddress } from './';
import styles from '../Card/styles.module.scss';

export const ListItem: FC<ListItemProps> = ({
  id,
  address,
  amount,
  team,
  time,
  rate,
}: ListItemProps): JSX.Element => (
  <article className={styles.item}>
    <section>
      <p className={styles.id}>{id}</p>
      <section>
        <div className={styles.firstLine}>
          <p>{`${convertAddress(address)} bets  $ ${amount}`}</p>
        </div>
        <p>{`on ${team} at ${time} with ${rate} rate`}</p>
      </section>
    </section>
    <div className={styles.separator} />
  </article>
);
