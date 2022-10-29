import { FC, useEffect, useState } from 'react';

import Web3 from 'web3';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import cn from 'classnames';

import { useConnectWallet, useMediaQuery } from '../../hooks';
import { CardContainer } from '../';
import { Button, Select } from '../../components';
import { NavigationBar } from './';
import styles from './styles.module.scss';

export const Header: FC = (): JSX.Element => {
  const isWideView = !useMediaQuery(1279);
  const { connect } = useConnectWallet();
  const web3 = new Web3(Web3.givenProvider);
  const [account, setAccount] = useState<string>('');
  // Modal
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const selectData: string[] = ['Binance smart chain', 'Hyperledger'];

  useEffect(() => {
    web3.eth.getAccounts().then((accounts) => {
      if (accounts[0]) {
        setAccount(accounts[0]);
      } else {
        setAccount('');
      }
    });
  }, [web3]);

  return (
    <header className={styles.header}>
      {isWideView ? (
        <>
          <h1 className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              Dragon Energy
            </Link>
          </h1>
          <NavigationBar />
          {account.length > 0 ? (
            <Button
              className={cn(styles.connectWallet, styles.activeButton)}
              type="medium"
              color="purple"
              onClick={() => account && setModalOpen(true)}
            >
              <div className={styles.addressWrap}>
                <span>{account.slice(0, 5)}</span>
                ...
                <span>{account.slice(-4)}</span>
              </div>
            </Button>
          ) : (
            <Button
              className={styles.connectWallet}
              type="large"
              color="purple"
              onClick={() => setModalOpen(true)}
            >
              Connect wallet
            </Button>
          )}
          <Button type="settings" />
        </>
      ) : (
        <>
          <div>
            <h1 className={styles.logo}>
              <Link to="/" className={styles.logoLink}>
                Dragon Energy
              </Link>
            </h1>
            <div>
              {account ? (
                <Button
                  className={cn(styles.connectWallet, styles.activeButton)}
                  type="medium"
                  color="purple"
                  onClick={() => account && setModalOpen(true)}
                >
                  <div className={styles.addressWrap}>
                    <span>{account.slice(0, 5)}</span>
                    ...
                    <span>{account.slice(-4)}</span>
                  </div>
                </Button>
              ) : (
                <Button
                  className={styles.connectWallet}
                  type="large"
                  color="purple"
                  onClick={() => setModalOpen(true)}
                >
                  Connect wallet
                </Button>
              )}
              <Button type="settings" />
            </div>
          </div>
          <NavigationBar />
        </>
      )}
      <Modal
        className={styles.connectWalletDialog}
        overlayClassName={styles.overlay}
        isOpen={isModalOpen}
      >
        <CardContainer className={styles.modal}>
          <div>
            <form className={styles.form}>
              <Select
                name="walletChain"
                options={selectData}
                text="Select a chain to connect to"
              />
              <footer className={styles.footer}>
                <Button
                  color="orange"
                  type="large"
                  image="metamask"
                  onClick={() => {
                    connect();
                    setModalOpen(false);
                  }}
                >
                  <span>Metamask</span>
                </Button>
                <Button
                  color="purple"
                  type="large"
                  onClick={() => setModalOpen(false)}
                >
                  Wallet connect
                </Button>
              </footer>
            </form>
            <Button
              className={styles.close}
              type="close"
              onClick={() => setModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </CardContainer>
      </Modal>
    </header>
  );
};
