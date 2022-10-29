import { FC } from 'react';

import cn from 'classnames';

import { useBetSlipContext } from '../../context';
import { CardContainer } from '../../containers';
import { Button, Team, Timer } from '../';
import { Props } from './';
import styles from './styles.module.scss';

export const Card: FC<Props> = ({
  eventInfo,
  size = 'normal',
}: Props): JSX.Element => {
  const { addBet } = useBetSlipContext();

  const handleOnClick = (winner: 'home' | 'away'): void =>
    addBet({ eventId: eventInfo.id, winner });

  return (
    <CardContainer className={cn(styles.card, styles[size])}>
      <div>
        <h3 className={styles.header}>
          <img
            className={styles.image}
            src={eventInfo.league.image}
            alt="league"
          />
          {eventInfo.league.name}
        </h3>
        <Timer time={eventInfo.time} />
        <div className={styles.match}>
          <Team
            className={styles.player}
            playerInfo={eventInfo.home}
            from="home"
          />
          <span>vs</span>
          <Team
            className={styles.player}
            playerInfo={eventInfo.away}
            from="away"
          />
        </div>
        <div className={styles.wagers}>
          <span className={styles.title}>Staked: </span>
          <span
            className={styles.amount}
          >{`$ ${eventInfo.staked_amount}`}</span>
        </div>
        <div className={styles.bets}>
          <Button
            color="green"
            type="large"
            onClick={() => handleOnClick('home')}
          >
            {`${eventInfo.home.odd}`}
          </Button>
          <Button
            color="purple"
            type="large"
            onClick={() => handleOnClick('away')}
          >
            {`+${eventInfo.away.odd}`}
          </Button>
        </div>
        <footer>
          <a
            className={styles.twitch}
            href={eventInfo.twitch_url}
            target="_blank"
            rel="noreferrer"
          >
            Live on twitch
          </a>
          <Button type="favorite" />
        </footer>
      </div>
    </CardContainer>
  );
};
