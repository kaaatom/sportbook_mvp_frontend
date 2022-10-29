export type Props = {
  setModalOpen: any;
};

export type BetListProps = {
  index: number;
  list: {
    type: string;
    teams: string[];
    wagered: number;
    on: string;
    odd: number;
    time: string;
    isWin: boolean;
  }[];
};

export type BetProps = {
  type: string;
  teams: string[];
  wagered: number;
  on: string;
  odd: number;
  time: string;
  isWin: boolean;
};

export type Bets = {
  bets: BetProps[][];
};
