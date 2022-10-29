import { useState } from 'react';

import Web3 from 'web3';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';

import { useContract } from './';
import { approveBet } from '../utils';
import { SPORTBOOK_GOERLI } from '../constants';

type Bet = {
  event_id: string;
  selected_winner: 1 | 2;
  ratio: number;
  bet_value: number;
  signature: string;
};

type Methods = {
  loading: boolean;
  makeBet: (data: Bet) => Promise<void> | void;
};

export const useMakeBet = (): Methods => {
  const { contractSportbook, contractToken } = useContract();
  const { account } = useWeb3React();

  const [loading, setLoading] = useState<boolean>(false);

  const makeBet = async (data: Bet) => {
    try {
      setLoading(true);
      console.log('here');

      const web3Data = {
        ...data,
        ...{
          bet_value: Web3.utils.toBN(data.bet_value),
        },
      };

      try {
        console.log(account);
        await approveBet({
          account: account,
          contract: contractToken,
          address: SPORTBOOK_GOERLI,
          amount: web3Data.bet_value,
        });
        console.log('approve suc');
      } catch (e) {
        console.log(e);
        toast.error('Approve rejected');
        setLoading(false);
      }

      const estimateGas = await contractSportbook?.methods
        ?.makeBet(
          web3Data.event_id,
          web3Data.selected_winner,
          web3Data.ratio,
          web3Data.bet_value,
          web3Data.signature
        )
        .estimateGas({ from: account });

      await contractSportbook?.methods
        ?.makeBet(
          web3Data.event_id,
          web3Data.selected_winner,
          web3Data.ratio,
          web3Data.bet_value,
          web3Data.signature
        )
        .send({ from: account, gas: estimateGas });

      toast.success('Bet successful');
      setLoading(false);
    } catch (e) {
      toast.error('Bet rejected');
      console.log(e);
      setLoading(false);
    }
  };

  return {
    loading,
    makeBet,
  };
};
