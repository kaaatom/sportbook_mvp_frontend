import { FC, useState } from 'react';

import cn from 'classnames';

import { EventInfo } from '../../types';
import { Button, Team } from '../';
import styles from './styles.module.scss';

type Props = {
  event: EventInfo;
  winner: 'home' | 'away';
  changeWinner: (eventId: number, newWinner: 'home' | 'away') => void;
  removeBet: (eventId: number) => void;
};

export const MatchInfo: FC<Props> = ({
  event,
  winner,
  changeWinner,
  removeBet,
}: Props): JSX.Element => {
  const [localWinner, setLocalWinner] = useState<'home' | 'away'>(winner);
  const isActiveHome = localWinner === 'home';

  const handleChangeWinner = (newWinner: 'home' | 'away') => {
    changeWinner(event.id, newWinner);
    setLocalWinner(newWinner);
  };

  const handleRemoveBet = () => removeBet(event.id);

  return (
    <section className={styles.betInfo}>
      <span />
      <div>
        <div className={styles.match}>
          <Team
            className={cn(styles.player, !isActiveHome && styles.inactive)}
            playerInfo={event.home}
            from="home"
            size="compact"
          />
          <span>vs</span>
          <Team
            className={cn(styles.player, isActiveHome && styles.inactive)}
            playerInfo={event.away}
            from="away"
            size="compact"
          />
        </div>
        <div className={styles.buttonsBlock}>
          <div className={styles.time}>
            <span>Time left</span>
            <time dateTime="PT10H10M10S">10:10:10</time>
          </div>
          <div className={styles.bets}>
            <Button
              className={cn(styles.button, isActiveHome && styles.homeActive)}
              color="green"
              type={isActiveHome ? 'medium' : 'large'}
              onClick={() => handleChangeWinner('home')}
            >
              {event.home.odd}
            </Button>
            <Button
              className={cn(styles.button, !isActiveHome && styles.awayActive)}
              color="purple"
              type={isActiveHome ? 'large' : 'medium'}
              onClick={() => handleChangeWinner('away')}
            >
              {`+${event.away.odd}`}
            </Button>
          </div>
        </div>
        <Button type="closeCircle" onClick={handleRemoveBet} />
      </div>
    </section>
  );
};
