import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import Modal from 'react-modal';

import { useLocalStorage } from '../../hooks';
import { ApproveBetModal, CombinedGamesModal } from '../../components';
import styles from './styles.module.scss';

type Bet = {
  eventId: number;
  winner: 'home' | 'away';
};

type BetSlipContextType = {
  betAmount: string;
  bets: Bet[];
  openBetSlipModal: () => void;
  closeBetSlipModal: () => void;
  openApproveBetModal: () => void;
  closeApproveBetModal: () => void;
  setBetAmount: Dispatch<SetStateAction<string>>;
  addBet: (newBet: Bet) => void;
  changeWinner: (eventId: number, newWinner: 'home' | 'away') => void;
  removeBet: (eventId: number) => void;
};

const BetSlipContext = createContext({} as BetSlipContextType);

export const useBetSlipContext = () => useContext(BetSlipContext);

export const BetSlipProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isApproveModalOpen, setApproveModalOpen] = useState<boolean>(false);
  const [betAmount, setBetAmount] = useState<string>('');
  const [bets, setBets] = useLocalStorage<Bet[]>('user-bets', []);

  const openBetSlipModal = (): void => setOpen(true);
  const closeBetSlipModal = (): void => setOpen(false);

  const openApproveBetModal = (): void => setApproveModalOpen(true);
  const closeApproveBetModal = (): void => setApproveModalOpen(false);

  const checkBetForDoubling = (eventId: number): boolean =>
    bets.some((value) => value.eventId === eventId);

  const checkForAnotherWinner = (bet: Bet): boolean =>
    bets.some(
      (value) => value.eventId === bet.eventId && value.winner !== bet.winner
    );

  const changeWinner = (eventId: number, newWinner: 'home' | 'away'): void =>
    setBets(
      (currentBets) =>
        currentBets.map((value) => {
          if (value.eventId === eventId) {
            return { ...value, winner: newWinner };
          }
        }) as Bet[]
    );

  const addBet = (newBet: Bet): void => {
    if (!checkBetForDoubling(newBet.eventId)) {
      setBets((currentBets) => [...currentBets, newBet]);
    } else if (checkForAnotherWinner(newBet)) {
      changeWinner(newBet.eventId, newBet.winner);
    }
  };

  const removeBet = (eventId: number): void =>
    setBets((currentBets) =>
      currentBets.filter((value) => value.eventId !== eventId)
    );

  return (
    <BetSlipContext.Provider
      value={{
        betAmount,
        bets,
        setBetAmount,
        openBetSlipModal,
        closeBetSlipModal,
        openApproveBetModal,
        closeApproveBetModal,
        addBet,
        changeWinner,
        removeBet,
      }}
    >
      {children}
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={isOpen}
      >
        <CombinedGamesModal onCloseModal={closeBetSlipModal} />
      </Modal>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={isApproveModalOpen}
      >
        <ApproveBetModal rate="1" />
      </Modal>
    </BetSlipContext.Provider>
  );
};
