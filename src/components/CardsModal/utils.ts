export const convertNum = (num: string): string =>
  ` $ ${num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`;

export const convertAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(-4)}`;
