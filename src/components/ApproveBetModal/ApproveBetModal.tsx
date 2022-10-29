import { FC, useState } from 'react';

import Web3 from 'web3';

import { useBetSlipContext } from '../../context';
import { useMakeBet } from '../../hooks';
import { CardContainer } from '../../containers';
import { Button, Loader } from '../';
import { Props, Bet } from './';
import styles from './styles.module.scss';

export const ApproveBetModal: FC<Props> = ({ rate }: Props): JSX.Element => {
  const { betAmount, bets, openBetSlipModal, closeApproveBetModal } =
    useBetSlipContext();

  const { loading, makeBet } = useMakeBet();
  const [dataLoading, setDataLoading] = useState<boolean>(false);

  const getBetData = async (): Promise<Bet> => {
    return await fetch('https://sportbook2.herokuapp.com/bet', {
      method: 'POST',
      body: JSON.stringify({
        bets: bets.map((value) => ({
          ...value,
          amount: Web3.utils.toWei(betAmount),
        })),
      }),
    })
      .then((response) => response.json())
      .then((bet) => bet as Bet)
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  const handleCancelOnClick = (): void => {
    closeApproveBetModal();
    openBetSlipModal();
  };

  const handleMakeBetOnClick = async (): Promise<void> => {
    setDataLoading(true);
    const betData = await getBetData();
    setDataLoading(false);
    console.log(betData);
    await makeBet(betData);
    closeApproveBetModal();
  };

  return (
    <CardContainer className={styles.modal}>
      <div>
        {loading || dataLoading ? (
          <section className={styles.loaderWrapper}>
            <Loader />
          </section>
        ) : (
          <>
            <section className={styles.header}>
              <h3>Approve the single bet</h3>
              <div>
                <p>{`Are you sure you want to bet $ ${betAmount}`}</p>
              </div>
              <p>{`on the parlay bet with ${rate}x rate? Your funds will\nbe locked until all the game will end.`}</p>
            </section>
            <div className={styles.separator} />
            <section className={styles.buttonBlock}>
              <Button
                className={styles.button}
                type="empty"
                color="transparent"
                onClick={handleCancelOnClick}
              >
                Cancel
              </Button>
              <Button
                className={styles.button}
                type="large"
                color="green"
                onClick={handleMakeBetOnClick}
              >
                Make a bet
              </Button>
            </section>
            <Button
              className={styles.close}
              type="close"
              onClick={handleCancelOnClick}
            >
              Close
            </Button>
          </>
        )}
      </div>
    </CardContainer>
  );
};
