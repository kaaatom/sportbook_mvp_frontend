import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { ToastContainer } from 'react-toastify';

import './index.scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import { SiteRoutes } from './containers';

function getLibrary(provider: any) {
  return new Web3(provider);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <SiteRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
