import React, { FC, useState, useRef } from 'react';

import Modal from 'react-modal';
import cn from 'classnames';

import { EventInfo } from '../../types';
import { useClickOutside } from '../../hooks';
import { ApproveBetModal, Button, CardsModal, Timer } from '../';
import styles from './styles.module.scss';

type Props = {
  id: string;
  placeholder: string;
  matchList: EventInfo[];
  className?: string;
};

type InfoProps = {
  match: EventInfo;
  buttonClick: any;
};

const getName = (name: string) =>
  name
    .toLowerCase()
    .split(' ')
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join('\n');

const getPlayer = (
  playerInfo: { image: string; name: string; odd: number; percent: number },
  from: string
) => {
  const playerStyle = {
    '--player-logo': String.raw`url(../../assets/tmp/card-player-away-logo.svg)`,
    '--player-odds': playerInfo.percent,
  } as React.CSSProperties;

  return (
    <div className={cn(styles.player, styles[from])} style={playerStyle}>
      <span className={styles.odds}>{`${playerInfo.percent}%`}</span>
      <span className={styles.name}>{getName(playerInfo.name)}</span>
    </div>
  );
};

const MatchInfo: FC<InfoProps> = ({ match, buttonClick }) => (
  <section className={styles.betInfo}>
    <span />
    <div>
      <div className={styles.match}>
        {getPlayer(match.home, 'home')}
        <span>vs</span>
        {getPlayer(match.away, 'away')}
      </div>
      <div className={styles.buttonsBlock}>
        <Timer
          classNameTime={styles.time}
          classNameNum={styles.num}
          classNameColon={styles.colon}
          time={match.time}
        />
        <Button
          className={styles.button}
          color="green"
          type="large"
          onClick={() => buttonClick(match)}
        >
          Make a bet
        </Button>
      </div>
    </div>
  </section>
);

const filterMatches = (
  matchList: EventInfo[],
  filter: string,
  buttonClick: any
) =>
  matchList.map((value, index) => {
    if (
      value.away.name.toLowerCase().includes(filter.toLowerCase()) ||
      value.home.name.toLowerCase().includes(filter.toLowerCase())
    ) {
      return (
        <li>
          <MatchInfo
            key={`match-${index}`}
            match={value}
            buttonClick={buttonClick}
          />
        </li>
      );
    }
  });

export const SearchMatchInput: FC<Props> = ({
  id,
  placeholder,
  matchList,
  className,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isApproveModalOpen, setApproveModalOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('');
  const [currentMatch, setCurrentMatch] = useState<EventInfo>(matchList[0]);

  const buttonClick = (match: EventInfo) => {
    setCurrentMatch(match);
    setOpen(false);
    setModalOpen(true);
  };

  const clickOutside = () => setOpen(false);

  const ref = useRef<HTMLElement>(null);

  useClickOutside(ref, clickOutside);

  return (
    <>
      <section ref={ref} className={styles.matchSearch}>
        <label htmlFor={id}>
          <div className={className}>
            <input
              className={styles.search}
              id={id}
              name="search"
              type="search"
              value={searchValue}
              onChange={(e) => {
                e.target.value.length ? setOpen(true) : setOpen(false);
                setSearchValue(e.target.value);
              }}
              onClick={() => searchValue.length > 0 && setOpen(true)}
              placeholder={placeholder}
              required
            />
            {/*FIXME: In the design the placeholder is used as if it was a label; this will cause*/}
            {/*assistive technologies to announce the same text twice.*/}
            {/*This is a major UX and a11y failure for which the designer is responsible.*/}
            <span>Search your event</span>
          </div>
        </label>
        {searchValue.length !== 0 && (
          <ul className={cn(styles.list, isOpen && styles.open)}>
            {filterMatches(matchList, searchValue, buttonClick)}
          </ul>
        )}
      </section>
      <Modal
        className={styles.betDialog}
        overlayClassName={styles.overlay}
        isOpen={isModalOpen}
      >
        <CardsModal
          eventInfo={currentMatch}
          odd={190}
          amount={amount}
          setAmount={setAmount}
          setModalOpen={setModalOpen}
          setApproveModalOpen={setApproveModalOpen}
        />
      </Modal>
      {/*<Modal*/}
      {/*  className={styles.betDialog}*/}
      {/*  overlayClassName={styles.overlay}*/}
      {/*  isOpen={isApproveModalOpen}*/}
      {/*>*/}
      {/*  <ApproveBetModal*/}
      {/*    id={currentMatch.id}*/}
      {/*    amount={amount}*/}
      {/*    winner="home"*/}
      {/*    rate="123"*/}
      {/*    setModalOpen={setApproveModalOpen}*/}
      {/*    setPreviousModalOpen={setModalOpen}*/}
      {/*    setPreviousValue={setAmount}*/}
      {/*  />*/}
      {/*</Modal>*/}
    </>
  );
};
