import { FC } from 'react';

import cn from 'classnames';

import { BetProps } from './types';
import Coin from '../../assets/icons/coin.svg';
import styles from './styles.module.scss';

export const Bet: FC<BetProps> = ({
  teams,
  wagered,
  on,
  odd,
  time,
  isWin,
}: BetProps): JSX.Element => {
  const result = isWin ? 'Win' : 'Lost';

  return (
    <div className={styles.bet}>
      <div>
        <section className={styles.infoOne}>
          <p className={styles.paragraph}>
            {teams[0]}
            <span className={styles.vs}>vs</span>
            {teams[1]}
          </p>
          <p className={styles.paragraph}>
            You wagered:{' '}
            <span className={cn(styles.paragraph, styles.coin)}>
              {`${wagered} `}
              <img src={Coin} alt="coin" />
              {` on ${on}`}
            </span>
          </p>
        </section>
        <section className={styles.infoTwo}>
          <p>
            Odd:
            <span>{` ${odd}`}</span>
          </p>
          <p className={styles.paragraph}>
            Time:
            <time>{` ${time}`}</time>
          </p>
        </section>
      </div>
      <p className={styles[result.toLowerCase()]}>{result}</p>
    </div>
  );
};
