import { useWeb3React } from '@web3-react/core';

import { injected } from '../wallet/Connect';

type Connect = () => void;

export const useConnectWallet = (): { connect: Connect } => {
  const web3 = useWeb3React();

  const connect = async () => {
    try {
      await web3.activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  return { connect };
};
