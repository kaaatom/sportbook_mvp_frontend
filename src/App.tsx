import { FC, useEffect } from 'react';

import Web3 from 'web3';
import { Outlet } from 'react-router-dom';

import { useConnectWallet } from './hooks';
import { BetSlipProvider } from './context';
import { Footer, Header } from './containers';
import './App.scss';

const App: FC = () => {
  const { connect } = useConnectWallet();
  const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    web3.eth.getAccounts().then((accounts) => {
      if (!accounts[0]) {
        connect();
      }
    });
  }, [web3]);

  return (
    <div className="App">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap"
        media="screen,print"
      />
      <BetSlipProvider>
        <Header />
        <Outlet />
        <Footer />
      </BetSlipProvider>
    </div>
  );
};

export default App;
