import { FC, useState, useEffect } from 'react';

import { EventInfo } from '../../types';
import { useBetSlipContext } from '../../context';
import { CardContainer } from '../../containers';
import { Button, NumericInput, Loader } from '../';
import { Props, MatchInfo, checkForDoubling, convertNum } from './';
import styles from './styles.module.scss';

export const CombinedGamesModal: FC<Props> = ({
  onCloseModal,
}: Props): JSX.Element => {
  const totalOdds = -380;
  const possibleWin = 3456;

  const {
    betAmount,
    bets,
    setBetAmount,
    changeWinner,
    removeBet,
    closeBetSlipModal,
    openApproveBetModal,
  } = useBetSlipContext();

  const [matchData, setMatchData] = useState<EventInfo[]>([]);
  const [matchList, setMatchList] = useState<JSX.Element[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  const getMatchInfo = (
    eventInfo: EventInfo,
    winner: 'home' | 'away'
  ): JSX.Element => (
    <li key={`match-info-${eventInfo.id}`}>
      <MatchInfo
        event={eventInfo}
        winner={winner}
        changeWinner={changeWinner}
        removeBet={removeBet}
      />
    </li>
  );

  const getMatchData = (): void => {
    const data: EventInfo[] = matchData;
    bets.map((value) =>
      fetch(`https://sportbook2.herokuapp.com/events/${value.eventId}`)
        .then((data) => data.json())
        .then((resultData) => {
          if (!checkForDoubling(data, resultData)) {
            data.push(resultData);
            setMatchData((currentData) => [...currentData, resultData]);
            setMatchList((currentList) => [
              ...currentList,
              getMatchInfo(resultData, value.winner),
            ]);
          }
        })
        .catch((e) => console.log(e))
    );
  };

  const getData = async (): Promise<void> => {
    setLoad(true);
    await setMatchData([]);
    await setMatchList([]);
    await getMatchData();
    setLoad(false);
  };

  const handleOnCloseClick = (): void => onCloseModal();

  const handleMakeBet = (): void => {
    closeBetSlipModal();
    openApproveBetModal();
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!bets.length) {
      handleOnCloseClick();
    }
    if (bets.length !== matchData.length && matchData.length) {
      getData();
    }
  }, [bets.length]);

  return (
    <CardContainer className={styles.modal}>
      <div>
        <h3 className={styles.header}>combined games</h3>
        <Button
          className={styles.close}
          type="close"
          onClick={handleOnCloseClick}
        >
          Close
        </Button>
        {load ? (
          <div className={styles.loaderContainer}>
            <Loader className={styles.loader} />
          </div>
        ) : (
          <>
            <ul>{matchList}</ul>
            <form>
              <p>
                Total bet amount:
                <a>List of bets</a>
              </p>
              <div>
                <NumericInput
                  id="betAmount"
                  value={betAmount}
                  setValue={setBetAmount}
                  className={styles.input}
                />
                <Button
                  type="large"
                  color="green"
                  className={styles.makeBet}
                  onClick={handleMakeBet}
                >
                  MAKE A BET
                </Button>
              </div>
            </form>
            <div>
              <p className={styles.totalOdds}>{`Total odds: ${totalOdds}`}</p>
              <p className={styles.possibleWin}>
                {`Possible win: `}
                <span className={styles.winNum}>{convertNum(possibleWin)}</span>
              </p>
            </div>
            <footer>
              When the time is up, the conditions will be recalculated
            </footer>
          </>
        )}
      </div>
    </CardContainer>
  );
};
