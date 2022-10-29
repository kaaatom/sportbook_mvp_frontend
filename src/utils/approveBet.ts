import Web3 from 'web3';
import BN from 'bn.js';

type Props = {
  account: string | null | undefined;
  contract: any;
  address: string;
  amount: BN;
};

export const approveBet = async ({
  account,
  contract,
  address,
  amount,
}: Props) => {
  const allowance = await contract?.methods?.allowance(account, address).call();

  if (Web3.utils.toBN(allowance).lt(amount)) {
    const estimateGasApprove = await contract?.methods
      ?.approve(address, amount)
      .estimateGas({ from: account });

    await contract?.methods
      .approve(address, amount)
      .send({ from: account, gas: estimateGasApprove });
  }
};
