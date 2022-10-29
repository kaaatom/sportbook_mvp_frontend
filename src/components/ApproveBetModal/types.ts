export type Props = {
  rate: string;
};

export type Bet = {
  event_id: string;
  selected_winner: 1 | 2;
  ratio: number;
  bet_value: number;
  signature: string;
};
