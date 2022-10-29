import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import { TOKEN_GOERLI, SPORTBOOK_GOERLI } from '../constants';
import abi_sportbook from '../contracts/abi/abi_sportbook.json';
import abi_token from '../contracts/abi/abi_token.json';

type Methods = {
  contractToken: any;
  contractSportbook: any;
  provider: any;
};

export const useContract = (): Methods => {
  const web3 = useWeb3React();
  const provider = new Web3(Web3.givenProvider);

  let contractToken;
  let contractSportbook;

  switch (web3.chainId) {
    // GOERLI
    case 5: {
      contractToken = new provider.eth.Contract(
        abi_token as AbiItem[],
        TOKEN_GOERLI
      );
      contractSportbook = new provider.eth.Contract(
        abi_sportbook as AbiItem[],
        SPORTBOOK_GOERLI
      );
      break;
    }

    default: {
      contractToken = null;
      contractSportbook = null;
    }
  }

  return {
    contractToken,
    contractSportbook,
    provider,
  };
};
