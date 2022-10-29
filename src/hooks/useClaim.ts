import { useState } from 'react';

import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';

import { useContract } from './';

type Methods = {
  loading: boolean;
  claim: (eventId: string) => Promise<void> | void;
};

export const useClaim = (): Methods => {
  const { contractSportbook } = useContract();
  const web3 = useWeb3React();

  const [loading, setLoading] = useState<boolean>(false);

  const claim = async (eventId: string) => {
    try {
      setLoading(true);

      const estimateGas = await contractSportbook?.methods
        ?.claim(eventId)
        .estimateGas({ from: web3.account });

      await contractSportbook?.methods
        ?.claim(eventId)
        .send({ from: web3.account, gas: estimateGas });

      toast.error('Bet successful');
      setLoading(false);
    } catch (e) {
      toast.error('Bet rejected');
      console.log(e);
      setLoading(false);
    }
  };

  return {
    loading,
    claim,
  };
};
