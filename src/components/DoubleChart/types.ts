export type Data = {
  label: string;
  data: number[];
  borderColor: string;
};

export type Props = {
  labels: string[];
  first: Data;
  second: Data;
  className?: string;
};
