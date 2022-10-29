import { FC, useEffect, useState } from 'react';

import Web3 from 'web3';
import Modal from 'react-modal';

import { useBetSlipContext } from '../../context';
import { Button, MyBetsModal, Social } from '../../components';
import styles from './styles.module.scss';

export const Footer: FC = () => {
  const web3 = new Web3(Web3.givenProvider);
  const { bets, openBetSlipModal } = useBetSlipContext();
  const [account, setAccount] = useState<string>('');
  const [isMyBetsModalOpen, setMyBetsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    web3.eth.getAccounts().then((accounts) => {
      if (accounts[0]) {
        setAccount(accounts[0]);
      } else {
        setAccount('');
      }
    });
  });

  return (
    <>
      <footer className={styles.container}>
        <ul className={styles.socialContainer}>
          <li className={styles.marker}>
            <Social name="twitter" link="#twitter" />
          </li>
          <li className={styles.marker}>
            <Social name="facebook" link="#facebook" />
          </li>
          <li className={styles.marker}>
            <Social name="github" link="#github" />
          </li>
        </ul>
        {account && (
          <div>
            {bets.length > 0 && (
              <Button type="footerSmall" onClick={openBetSlipModal}>
                Bet slip ({bets.length}) @
              </Button>
            )}
            <Button type="footerBig" onClick={() => setMyBetsModalOpen(true)}>
              My bets
            </Button>
          </div>
        )}
      </footer>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={isMyBetsModalOpen}
      >
        <MyBetsModal setModalOpen={setMyBetsModalOpen} />
      </Modal>
    </>
  );
};
