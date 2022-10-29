export type Props = {
  playerInfo: {
    name: string;
    image: string;
    percent: number;
  };
  from: string;
  size?: 'normal' | 'compact';
  className?: string;
};
