import { EventInfo } from '../../types';

export type Props = {
  eventInfo: EventInfo;
  odd: number;
  amount: string;
  setAmount: any;
  setModalOpen: any;
  setApproveModalOpen: any;
};

export type ListItemProps = {
  id: number;
  address: string;
  amount: string;
  team: string;
  time: string;
  rate: string;
};
