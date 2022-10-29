export type EventInfo = {
  id: number;
  league: {
    id: number;
    name: string;
    image: string;
  };
  away: {
    image: string;
    name: string;
    odd: number;
    percent: number;
  };
  home: {
    image: string;
    name: string;
    odd: number;
    percent: number;
  };
  like: boolean;
  staked_amount: number;
  time: number;
  twitch_url: string;
};
