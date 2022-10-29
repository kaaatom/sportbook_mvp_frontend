import { FC, CSSProperties, useState } from 'react';

import cn from 'classnames';

import { Button } from '../';
import { BetListProps, BetProps, Bet } from './';
import Coin from '../../assets/icons/coin.svg';
import Arrow from '../../assets/icons/arrow.svg';
import styles from './styles.module.scss';

const getBets = (listIndex: number, list: BetProps[]): JSX.Element[] =>
  list.map((value, index) => (
    <li key={`bet-${listIndex}-${index}`}>
      <Bet
        type={value.type}
        teams={value.teams}
        wagered={value.wagered}
        on={value.on}
        odd={value.odd}
        time={value.time}
        isWin={value.isWin}
      />
    </li>
  ));

const getIcons = (list: BetProps[]): JSX.Element[] => {
  const typeList: string[] = [];
  for (let i = 0; i < list.length; i++) {
    if (i === 4) {
      typeList[3] = '+2';
      continue;
    }
    if (i > 4) {
      typeList[3] = `+${parseInt(typeList[3].split('+')[1]) + 1}`;
      continue;
    }
    typeList.push(list[i].type);
  }

  return typeList.map((value, index) =>
    value.includes('+') ? (
      <li key={`icon-${value}-${index}`} className={styles.icon}>
        <p>{value}</p>
      </li>
    ) : (
      <li key={`icon-${value}-${index}`} className={styles.icon}>
        <img
          src={require(`../../assets/icons/sport/${value}.svg`)}
          alt={value}
        />
      </li>
    )
  );
};

const isWin = (list: BetProps[]): boolean => {
  let result = false;

  for (let i = 0; i < list.length; i++) {
    if (list[i].isWin) {
      result = true;
    }
  }

  return result;
};

const getWithdraw = (list: BetProps[]): number => {
  let withdraw = 0;

  list.map((value) => {
    if (value.isWin) {
      withdraw += value.wagered + value.wagered * Math.abs(1 - value.odd);
    }
  });

  return +withdraw.toFixed(0);
};

export const BetList: FC<BetListProps> = ({
  index,
  list,
}: BetListProps): JSX.Element => {
  const gamesCount = list.length > 1 ? `${list.length} GAMES` : '1 GAME';
  const result = isWin(list) ? 'Win' : 'Lost';
  const withdraw = result === 'Win' ? getWithdraw(list) : 0;
  const bets = getBets(index, list);
  const size = {
    height: `${68 + 90 * list.length}px`,
  } as CSSProperties;

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <article className={styles.bets} style={isOpen ? size : undefined}>
      <section className={styles.mainInfo}>
        <div>
          <p>{`PARLAY ${index}`}</p>
          <p>{gamesCount}</p>
        </div>
        <ul className={styles.iconList}>{getIcons(list)}</ul>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} type="large" color="green">
            <span className={styles.coin}>
              {`WITHDRAW $${withdraw}`}
              <img src={Coin} alt="coin" />
            </span>
          </Button>
        </div>
        <p className={cn(styles[result.toLowerCase()], styles.marginZero)}>
          {result}
        </p>
        <button className={styles.arrowButton} onClick={() => setOpen(!isOpen)}>
          <img
            className={cn(styles.arrow, isOpen && styles.up)}
            src={Arrow}
            alt="arrow"
          />
        </button>
      </section>
      <section className={styles.betList}>
        <ul>{bets}</ul>
      </section>
    </article>
  );
};
